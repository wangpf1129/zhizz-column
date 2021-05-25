<template>
  <div class="validate-input-container">
    <label>
      <span class="form-text">{{ inputTitle }}</span>
      <input class=" form-control"
             v-if="tag !== 'textarea' "
             :class="{'is-invalid':inputRef.error}"
             v-model="inputRef.value"
             @blur="validateInput"
             @input="updateValue"
             v-bind="$attrs"
      />
      <textarea class=" form-control"
                v-else
                :class="{'is-invalid':inputRef.error}"
                v-model="inputRef.value"
                @blur="validateInput"
                @input="updateValue"
                v-bind="$attrs"
      ></textarea>
      <span class="invalid-feedback">{{ !!inputRef.error && inputRef.message }}</span>
    </label>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, PropType, reactive} from 'vue';
import {emitter} from '@/components/content/ValidateForm.vue';
import {emailReg, passwordReg, RulesProp, TagProp} from '@/common/inputRules';

export default defineComponent({
  name: 'ValidateInput',
  props: {
    rules: {
      type: Array as PropType<RulesProp>
    },
    inputTitle: {type: String},
    inputValue: {type: String},
    tag: {
      type: String as PropType<TagProp>,
      default: 'input'
    }
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
              passed = passwordReg.test(inputRef.value);
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
  
  label {
    position: relative;
    width: 100%;
    padding: 0 20px;
    
    input {
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
