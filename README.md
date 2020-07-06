# vue-quasar-crud-generator
A schema-based crud generator component for Vue.js  with Quasar Framework.

## This repository isn't working very well contribute to this project 
### Todo List

1- The component is not reactive, we need to pass the model name on the schema, and the form component and the list have to access and change these states

2- Other features are welcome

## Usage
1. Clone or Download the repository

2. Install JSON Server globally to simulate an api.

 ```sh
npm install -g json-server
```

2. Start JSON Server.
```sh
cd vue-quasar-crud-generator\back-end\fake-api
json-server --watch db.json
```
3. Install Quasar CLI

```sh
$ yarn global add @quasar/cli
# or
$ npm install -g @quasar/cli
```

4. Run de project
```sh
quasar dev
```
5. Build de project
```sh
quasar build
```

6. This is a small example of how to use

```js
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
```
