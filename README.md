<<<<<<< HEAD
# Quasar App (vue-quasar-crud-generator)

A Quasar Framework app

## Install the dependencies
```bash
yarn
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```

### Lint the files
```bash
yarn run lint
```

### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
=======
# vue-quasar-crud-generator
A schema-based crud generator component for Vue.js  with Quasar Framework.

Dependencies
We use axios - Promise based HTTP client

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

>>>>>>> 86d103fa90e966de87722ca10558f942257eb50d
