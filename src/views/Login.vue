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
        <validate-input input-title="密码"
                        :rules="passwordRules"
                        v-model:input-value="passwordValue"
                        type="password"
                        placeholder="请输入密码"
        ></validate-input>
      </div>
      <router-link to="/signup">还没有账户？去注册一个新的吧！</router-link>
      <template #submit>
        <div class="login-btn-wrap">
          <span class="btn btn-outline-success"> 登录 </span>
        </div>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import ValidateForm from '@/components/content/ValidateForm.vue';
import ValidateInput from '@/components/content/ValidateInput.vue';
import {useRouter} from 'vue-router';
import {RulesProp} from '@/common/inputRules';
import {useStore} from 'vuex';
import {GlobalDataProps} from '@/store';
import {createMessage} from '@/components/content/createMessage';

export default defineComponent({
  name: 'Login',
  components: {ValidateInput, ValidateForm},
  setup() {
    const router = useRouter();
    const store = useStore<GlobalDataProps>();
    const emailRules: RulesProp = [
      {type: 'required', message: '电子邮箱地址不能为空'},
      {type: 'email', message: '请输入正确的电子邮箱格式'},
    ];
    const passwordRules: RulesProp = [
      {type: 'required', message: '密码不能为空'},
      {type: 'password', message: '长度至少为8，至少含有一个字母和一个数字'},
    ];
    const emailValue = ref('111@test.com'); //  Wangpf@163.com
    const passwordValue = ref('111111'); // w12345678
    const onFormSubmit = (result: boolean) => {
      if (result) {
        const payload = {
          email: emailValue.value,
          password: passwordValue.value
        };
        store.dispatch('loginAndFetchCurrentUser', payload).then(data => {
          createMessage('登录成功', 'success');
          router.push('/');
        }).catch(err => {
          console.log(err);
        });
      }
    };
    return {emailRules, passwordRules, emailValue, passwordValue, onFormSubmit};
  }
});
</script>

<style lang="scss" scoped>
.columnLogin {
  margin: 108px auto 0;
  overflow: hidden;
  height: 486px;
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
