<template>
  <div class="columnLogin">
    <img src="../assets/columnLogo.png" class="nice-logo" alt=""/>
    <validate-form class="login-form" @form-submit="onFormSubmit">
      <div class="login-input">
        <validate-input input-title="邮箱地址"
                        :rules="emailRules"
                        v-model:input-value="emailValue"
                        type="text"
                        placeholder="请输入邮箱"
                        class="login-input-item"
        ></validate-input>
      </div>
      <div class="login-input">
        <validate-input input-title="昵称"
                        :rules="nicknameRules"
                        v-model:input-value="nicknameValue"
                        type="text"
                        placeholder="请输入昵称"
        ></validate-input>
      </div>
      <div class="login-input">
        <validate-input input-title="密码"
                        :rules="passwordRules"
                        v-model:input-value="passwordValue"
                        type="password"
                        placeholder="请输入密码"
        ></validate-input>
      </div>
      <div class="login-input">
        <validate-input input-title="重复密码"
                        :rules="passwordRules"
                        v-model:input-value="passwordValue"
                        type="password"
                        placeholder="请再次输入密码"
        ></validate-input>
      </div>
      <router-link to="/login">已经有账户了？去登录</router-link>
      <template #submit>
        <div class="login-btn-wrap">
          <span class="btn btn-outline-success"> 注册 </span>
        </div>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import ValidateForm from '@/components/ValidateForm.vue';
import ValidateInput from '@/components/ValidateInput.vue';
import router from '@/router';
import {emailRules, passwordRules, nicknameRules} from '@/common/inputRules';

export default defineComponent({
  name: 'Signup',
  components: {ValidateInput, ValidateForm},
  setup() {
    const emailValue = ref(''); //  Wangpf@163.com
    const passwordValue = ref(''); // w12345678
    const nicknameValue = ref('');
    const onFormSubmit = (result: boolean) => {
      console.log('result', result);
      if (result) {
        router.push('/');
      }
    };
    return {emailRules, passwordRules, emailValue, passwordValue, onFormSubmit, nicknameValue, nicknameRules};
  }
});
</script>

<style lang="scss" scoped>
.columnLogin {
  margin: 64px auto 0;
  overflow: hidden;
  height: 686px;
  position: relative;
  max-width: 350px;
  border-radius: 8px;
  box-shadow: 1px 2px 15px rgba(0, 0, 0, .3);
  background: #fff url(../assets/logbg.jpg) no-repeat bottom;
  text-align: center;
  
  .nice-logo {
    width: 55px;
    margin: 40px 0 0;
  }
  
  .login-form {
    margin: 0 auto;
    
    .login-input {
      width: 100%;
      margin-bottom: 20px;
    }
    
    
    a {
      display: block;
      margin-top: 40px;
      padding-bottom: 20px;
      color: #000;
    }
    
    .login-btn-wrap {
      span {
        width: 248px;
        padding: 5px 12px;
      }
    }
  }
  
}
</style>
