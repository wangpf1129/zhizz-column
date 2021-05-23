<template>
  <div class="validate-input-container pb-3">
    <label>
      <span class="form-text">{{ inputTitle }}</span>
      <input class="form-control"
             :class="{'is-invalid':inputRef.error}"
             v-model="inputRef.value"
             @blur="validateInput"
             @input="updateValue"
             v-bind="$attrs"
      >
      <span v-if="inputRef.error" class="invalid-feedback">{{ inputRef.message }}</span>
    </label>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, PropType, reactive} from 'vue';
import {emitter} from '@/components/ValidateForm.vue';

const emailReg = /^([A-Za-z0-9_\-.\u4e00-\u9fa5])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,8})$/;

// 长度至少为8，至少含有一个字母和一个数字
const passwordRef = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

interface RuleRef {
  type: 'required' | 'email' | 'password';
  message: string;
}

export type RulesProp = RuleRef[]
export default defineComponent({
  name: 'ValidateInput',
  props: {
    rules: {
      type: Array as PropType<RulesProp>
    },
    inputTitle: {type: String},
    inputValue: {type: String}
  },
  inheritAttrs: false,
  setup(props, context) {
    const inputRef = reactive({
      value: props.inputValue || '',
      error: false,
      message: '',
    });
    const validateInput = () => {
      if (props.rules) {
        const allPassed: boolean = props.rules.every(rule => {
          let passed = true;
          inputRef.message = rule.message;
          switch (rule.type) {
            case  'required':
              passed = (inputRef.value.trim() !== '');
              break;
            case 'email':
              passed = emailReg.test(inputRef.value);
              break;
            case 'password':
              passed = passwordRef.test(inputRef.value);
              break;
            default:
              break;
          }
          return passed;
        });
        inputRef.error = !allPassed;
        return allPassed;
      }
      return true;
    };
    const updateValue = (event: KeyboardEvent) => {
      inputRef.value = (event.target as HTMLInputElement).value;
      context.emit('update:inputValue', inputRef.value);
    };
    onMounted(() => {
      emitter.emit('formItemCreated', validateInput);
    });
    return {
      inputRef, validateInput, updateValue
    };
  }
});
</script>

<style lang="scss" scoped>

</style>
