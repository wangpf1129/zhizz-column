<template>
  <form class="validate-form-container">
    <slot name="default"></slot>
    <div class="submit-area" @click="submitForm">
      <slot name="submit">
        <button type="submit" class="btn btn-outline-success"> 提交</button>
      </slot>
    </div>
  </form>
</template>

<script lang="ts">
import {defineComponent, onUnmounted} from 'vue';
import mitt from 'mitt';

export const emitter = mitt();
type validateFunc = () => boolean
export default defineComponent({
  name: 'ValidateForm',
  emits: ['form-submit'],
  setup(props, context) {
    const submitForm = () => {
      const result = funcArr.map(func => func()).every(result => result);
      context.emit('form-submit', result);
    };
    let funcArr: validateFunc[] = [];
    const callback = (func: validateFunc | undefined) => {  // 为了兼容 mitt 才写的 undefined
      if (func) {
        funcArr.push(func);
      }
    };
    emitter.on('formItemCreated', callback);
    onUnmounted(() => {
      emitter.off('formItemCreated', callback);
      funcArr = [];
    });
    return {submitForm};
  }
});
</script>

<style lang="scss" scoped>

</style>
