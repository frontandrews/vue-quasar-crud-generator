export default {
  methods: {
    notifyInsertSuccess () {
      this.$q.notify({ type: 'positive', message: 'Criado com sucesso.' })
    },
    notifyInsertFailure () {
      this.$q.notify({ type: 'negative', message: 'Não foi possível realizar esta operação, tente novamente mais tarde, ou entre em contato com o suporte' })
    },
    notifyUpdateSuccess () {
      this.$q.notify({ type: 'positive', message: 'Alterado com sucesso.' })
    },
    notifyUpdateFailure () {
      this.$q.notify({ type: 'negative', message: 'Não foi possível realizar esta alteração, tente novamente mais tarde, ou entre em contato com o suporte' })
    },
    notifyDeleteSuccess () {
      this.$q.notify({ type: 'positive', message: 'Excluido com sucesso.' })
    },
    notifyDeleteFailure () {
      this.$q.notify({ type: 'negative', message: 'Não foi possível realizar deletar este registro, tente novamente mais tarde, ou entre em contato com o suporte' })
    }
  }
}
