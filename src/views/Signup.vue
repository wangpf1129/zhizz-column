<template>
  <div class="columnLogin">
    <img src="../assets/columnLogo.png" class="nice-logo" alt="" />
    <validate-form class="login-form" @form-submit="onFormSubmit">
      <div class="login-input">
        <validate-input
          input-title="邮箱地址"
          :rules="emailRules"
          v-model:input-value="formData.emailValue"
          type="text"
          placeholder="请输入邮箱"
          class="login-input-item"
        ></validate-input>
      </div>
      <div class="login-input">
        <validate-input
          input-title="昵称"
          :rules="nicknameRules"
          v-model:input-value="formData.nicknameValue"
          type="text"
          placeholder="请输入昵称"
        ></validate-input>
      </div>
      <div class="login-input">
        <validate-input
          input-title="密码"
          :rules="passwordRules"
          v-model:input-value="formData.passwordValue"
          type="password"
          placeholder="请输入密码"
        ></validate-input>
      </div>
      <div class="login-input">
        <validate-input
          input-title="重复密码"
          :rules="repeatPasswordRules"
          v-model:input-value="formData.repeatPasswordValue"
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
import { defineComponent, reactive } from 'vue'
import ValidateForm from '@/components/content/ValidateForm.vue'
import ValidateInput from '@/components/content/ValidateInput.vue'
import router from '@/router'
import {
  emailRules,
  passwordRules,
  nicknameRules,
  RulesProp,
} from '@/common/inputRules'
import axios from 'axios'
import { createMessage } from '@/components/content/createMessage'

export default defineComponent({
  name: 'Signup',
  components: { ValidateInput, ValidateForm },
  setup() {
    const formData = reactive({
      emailValue: '',
      nicknameValue: '',
      passwordValue: '',
      repeatPasswordValue: '',
    })
    const repeatPasswordRules: RulesProp = [
      { type: 'required', message: '重复密码不能为空' },
      {
        type: 'custom',
        validator: () => {
          return formData.passwordValue === formData.repeatPasswordValue
        },
        message: '密码与之前不一样，请重新输入',
      },
    ]
    const onFormSubmit = async (result: boolean) => {
      if (result) {
        const payload = {
          email: formData.emailValue,
          password: formData.passwordValue,
          nickName: formData.nicknameValue,
        }
        axios
          .post('/users/', payload)
          .then(() => {
            createMessage('注册成功 正在跳转登录页面', 'success')
            router.push('/login')
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
    return {
      emailRules,
      passwordRules,
      formData,
      onFormSubmit,
      nicknameRules,
      repeatPasswordRules,
    }
  },
})
</script>

<style lang="scss" scoped>
.columnLogin {
  margin: 64px auto 0;
  overflow: hidden;
  height: 686px;
  position: relative;
  max-width: 350px;
  border-radius: 8px;
  box-shadow: 1px 2px 15px rgba(0, 0, 0, 0.3);
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
