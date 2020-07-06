export default {
  methods: {
    confirmBeforeContinue (title, message, callbackSuccess, props) {
      this.$q
        .dialog({
          title: title,
          message: message,
          cancel: true,
          persistent: true
        })
        .onOk(() => callbackSuccess(props))
    }
  }
}
