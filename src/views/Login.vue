<template>
  <validate-form :style="{ marginTop: '108px' }" @form-submit="onFormSubmit">
    <div class="mb-3">
      <validate-input input-title="邮箱地址"
                      :rules="emailRules"
                      v-model:input-value="emailValue"
                      type="text"
                      placeholder="请输入邮箱"
      ></validate-input>
    </div>
    <div class="mb-3">
      <validate-input input-title="密码"
                      :rules="passwordRules"
                      v-model:input-value="passwordValue"
                      type="password"
                      placeholder="请输入密码"
      ></validate-input>
    </div>
  </validate-form>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import ValidateForm from '@/components/ValidateForm.vue';
import ValidateInput, {RulesProp} from '@/components/ValidateInput.vue';
import {useRouter} from 'vue-router';

export default defineComponent({
  name: 'Login',
  components: {ValidateInput, ValidateForm},
  setup() {
    const router = useRouter();
    const emailRules: RulesProp = [
      {type: 'required', message: '电子邮箱地址不能为空'},
      {type: 'email', message: '请输入正确的电子邮箱格式'},
    ];
    const passwordRules: RulesProp = [
      {type: 'required', message: '密码不能为空'},
      {type: 'password', message: '长度至少为8，至少含有一个字母和一个数字'},
    ];
    const emailValue = ref(''); //  Wangpf@163.com
    const passwordValue = ref(''); // w12345678
    const onFormSubmit = (result: boolean) => {
      console.log('result', result);
      if (result) {
        router.push('/');
      }
    };
    return {emailRules, passwordRules, emailValue, passwordValue, onFormSubmit};
  }
});
</script>

<style lang="scss" scoped>

</style>
