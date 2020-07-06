<template>
  <div>
    <q-form @submit.prevent='onSubmit' @reset='resetForm'>
      <slot v-for='(item, index) in this.schema.fields'>
        <q-input
          v-if='item.type !== `select`'
          :type='!item.type ? false : item.type'
          :label='item.label'
          v-model='item.model'
          :key='!item.key ? index : item.key'
          :class='item.class'
          :filled='!item.filled ? false : item.filled'
          :disabled='!item.disabled ? false : item.disabled'
          :readonly='!item.readonly ? false : item.readonly'
          :required='!item.required ? false : item.required'
          :dense='!item.dense ? false : item.dense'
          :hint='item.hint'
          :suffix='item.suffix'
          :multiple='!item.multiple ? false : item.multiple'
          :clearable='!item.clearable ? false : item.clearable'
          :color='item.color'
          :autogrow='!item.autogrow ? false : item.autogrow'
          :mask='item.mask'
          :fill-mask='!item.fillMask ? false : item.fillMask'
          :reverse-fill-mask='!item.reverseFillMask ? false : item.reverseFillMask'
          :unmasked-value='!item.unmaskedValue ? false : item.unmaskedValue'
          :lazy-rules='!item.lazyRules ? false : item.lazyRules'
          :rules='item.lazyRules'
        />
        <q-select
          v-if='item.type == `select`'
          :label='item.label'
          v-model='item.model'
          :options='!item.options ? false : item.options'
          :key='!item.key ? index : item.key'
          :class='item.class'
          :filled='!item.filled ? false : item.filled'
          :rounded='!item.rounded ? false : item.rounded'
          :outlined='!item.outlined  ? false : item.outlined'
          :standout='!item.standout  ? false : item.standout'
          :borderless='!item.borderless   ? false : item.borderless '
          :disabled='!item.disabled ? false : item.disabled'
          :readonly='!item.readonly ? false : item.readonly'
          :required='!item.required ? false : item.required'
          :dense='!item.dense ? false : item.dense'
          :hint='item.hint'
          :suffix='item.suffix'
          :multiple='!item.multiple ? false : item.multiple'
          :lazy-rules='!item.lazyRules ? false : item.lazyRules'
          :rules='item.lazyRules'
        />
      </slot>

      <div class='float-right q-pb-md q-mt-md'>
        <q-btn label='Salvar' type='submit' color='primary' />
      </div>
    </q-form>
  </div>
</template>

<script>
// :rules='[ val => val && val.length > 0 || `Informe o ${item.label}`]'
const QuasarForm = {
  props: {
    onSubmit: {
      type: Function,
      required: true
    },
    resetForm: {
      type: Function,
      required: true
    },
    schema: {
      type: Object,
      required: true
    },
    state: {
      type: Object,
      required: true
    }
  }
}
export default QuasarForm
</script>
