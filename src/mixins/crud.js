export default {
  methods: {
    spliceItemFromArray (item) {
      const index = this.data.indexOf(item)
      this.data.splice(index, 1)
    },

    apiGet (url, callbackSuccess, callbackFailure) {
      this.$axios
        .get(url)
        .then(res => callbackSuccess ? callbackSuccess(res.data) : res.data)
        .catch(err => callbackFailure ? callbackFailure(err) : err)
    },
    apiGetById (url, id, callbackSuccess, callbackFailure) {
      this.$axios
        .get(`${url}/${id}`)
        .then(res => callbackSuccess ? callbackSuccess(res.data) : res.data)
        .catch(err => callbackFailure ? callbackFailure(err) : err)
    },
    apiPost (url, content, callbackSuccess, callbackFailure) {
      this.$axios
        .post(url, content)
        .then(res => callbackSuccess ? callbackSuccess(res.data) : res.data)
        .catch(err => callbackFailure ? callbackFailure(err) : err)
    },
    apiPut (url, id, content, callbackSuccess, callbackFailure) {
      this.$axios
        .put(`${url}/${id}`, content)
        .then(res => callbackSuccess ? callbackSuccess(res.data) : res.data)
        .catch(err => callbackFailure ? callbackFailure(err) : err)
    },

    apiDelete (url, id, callbackSuccess, callbackFailure) {
      this.$axios
        .delete(`${url}/${id}`)
        .then(res => callbackSuccess ? callbackSuccess(res.data) : res.data)
        .catch(err => callbackFailure ? callbackFailure(err) : err)
    },

    // Criado para hábilitar erro dentro de if ternário, mas pode ser usado em qualquer lugar, para retornar erros.
    throwErro (mensagem) {
      throw new Error(mensagem)
    }
  }
}
