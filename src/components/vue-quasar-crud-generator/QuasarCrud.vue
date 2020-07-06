
<template>
  <div class='flex flex-center column'>
    <div
      id='parent'
      class='fit row wrap justify-center items-start content-center'
      style='overflow: hidden'
    >
      <q-card class='col-11 q-pa-lg q-ma-lg shadow-12 rounded-borders' style='height:80vh'>
        <q-table
          :title='title'
          :data='data'
          :columns='columns'
          row-key='id'
          :loading='loading'
          :filter='filter'
        >
          <template v-slot:top-right>
            <q-input dense filled debounce='300' v-model='filter' placeholder='Search'>
              <template v-slot:append>
                <q-icon name='search' />
              </template>
            </q-input>
            <q-btn class='q-ml-md float-right' color='primary' label='Novo' @click='showNewForm' />
          </template>

          <template v-slot:body-cell-actions='props'>
            <q-td :props='props'>
              <q-btn dense round flat color='grey' @click='showEditForm(props)' icon='edit'></q-btn>
              <q-btn dense round flat color='grey' @click='onClickToDelete(props)' icon='delete'></q-btn>
            </q-td>
          </template>
        </q-table>

        <q-dialog v-model='modalShow'>
          <q-card style='min-width: 350px'>
            <q-card-section>
              <div v-if='!state.id' class='text-h6'>Novo {{ modalLabel }}</div>
              <div v-if='state.id' class='text-h6'>Editar {{ modalLabel }}</div>
            </q-card-section>

            <q-card-section class='q-pa-md'>
                <QuasarForm :onSubmit='onSubmit' :resetForm='resetForm' :schema='schema' :state='this.state' />
            </q-card-section>
          </q-card>
        </q-dialog>
      </q-card>
    </div>
  </div>
</template>

<script>
import crud from 'src/mixins/crud'
import notify from 'src/mixins/notify'
import dialog from 'src/mixins/dialog'
import QuasarForm from './QuasarForm.vue'

export default {
  components: { QuasarForm },
  mixins: [crud, notify, dialog],
  props: {
    apiRoute: {
      type: String,
      required: true
    },
    initialState: {
      type: Object,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    modalLabel: {
      type: String,
      required: true
    },
    schema: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      state: {
        ...this.initialState
      },
      columns: [
        {
          name: 'desc',
          required: true,
          label: 'Descrição',
          align: 'left',
          sortable: true,
          field: row => row.name,
          format: val => `${val}`
        },
        { name: 'actions', label: 'Ações', field: '', align: 'center' }
      ],
      data: [],
      filter: '',
      modalShow: false,
      loading: false
    }
  },
  mounted () {
    this.apiGet(this.apiRoute, this.getDataTable)
  },
  methods: {
    getDataTable (res) {
      this.data = res
    },
    showNewForm () {
      this.modalShow = true
      this.resetForm()
    },
    showEditForm (props) {
      this.modalShow = true
      const s = props.row
      Object.keys(s).forEach(key => {
        this.state[key] = s[key]
      })
      console.log(this.state)
      console.log(props)
    },
    onInsertSuccess (res) {
      this.data.push(res)
      this.notifyInsertSuccess()
    },
    onUpdateSuccess (res) {
      this.$set(this.data, this.state.rowIndex, res)
      this.notifyUpdateSuccess()
    },
    callApiDeleteSuccess (res) {
      this.notifyDeleteSuccess()
      this.data.splice(res.rowIndex, 1)
    },
    onSubmit () {
      !this.state.id
        ? this.apiPost(this.apiRoute, this.state, this.onInsertSuccess, this.notifyInsertFailure)
        : this.apiPut(this.apiRoute, this.state.id, this.state, this.onUpdateSuccess, this.notifyUpdateFailure)
      this.modalShow = false
    },
    callApiDelete (props) {
      this.apiDelete(this.apiRoute, props.row.id, this.callApiDeleteSuccess(props), this.notifySuccessFailure)
    },
    onClickToDelete (props) {
      const title = `Deletar ${this.modalLabel}`
      const message = `Você tem certeza que deseja deletar o(a) ${this.modalLabel} ?`
      this.confirmBeforeContinue(title, message, this.callApiDelete, props)
    },
    resetForm () {
      this.state = { ...this.initialState }
    }
  }
}

</script>
