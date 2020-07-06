<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
    <QuasarCrud
      :apiRoute='this.apiRoute'
      :title='this.title'
      :modalLabel='this.modalLabel'
      :schema='this.schema'
    />

  </q-page>
</template>

<script>
import QuasarCrud from 'src/components/vue-quasar-crud-generator/QuasarCrud'

export default {
  name: 'PageIndex',
  components: { QuasarCrud },
  data () {
    return {
      title: 'Departamentos', // title on the table
      modalLabel: 'Departamento', // modal label name
      apiRoute: 'departamentos', // api route that will be accessed
      schema: { // schema to create the form fields
        fields: [
          {
            type: 'input',
            label: 'ID',
            model: 'id',
            readonly: true,
            disabled: true
          }, {
            type: 'input',
            label: 'Departamento',
            model: 'name',
            required: true
          }
        ]
      }
    }
  }
}
</script>
