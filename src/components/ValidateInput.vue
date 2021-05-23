<template>
  <div class="validate-input-container">
    <label>
      <span class="form-text">{{ inputTitle }}</span>
      <input class=" form-control"
             :class="{'is-invalid':inputRef.error}"
             v-model="inputRef.value"
             @blur="validateInput"
             @input="updateValue"
             v-bind="$attrs"
      >
      <span class="invalid-feedback">{{ !!inputRef.error && inputRef.message }}</span>
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
.validate-input-container {
  .form-text {
    display: block;
    font-size: 14px;
    font-weight: 600;
    text-align: left;
    padding: 4px 0;
  }
  
  label{
    position: relative;
    input {
      width: 296px;
      padding: 8px 14px;
      font-size: 14px;
    }
  
    .invalid-feedback {
      font-size: 12px;
      position: absolute;
      top: 68px;
      text-align: left;
      padding: 4px 0;
    }
  }
}
</style>
