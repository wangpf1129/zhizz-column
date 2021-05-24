<template>
  <div class="CreatePostPage">
    <h4>新建文章</h4>
    <validate-form>
      <div class="mb-3">
        <validate-input input-title="文章标题"
                        :rules="titleRules"
                        v-model:input-value="titleValue"
                        type="text"
                        placeholder="请输入文章标题"
                        class="login-input-item"
        ></validate-input>
      </div>
      <div class="mb-3">
        <validate-input input-title="文章详情"
                        :rules="contentRules"
                        v-model:input-value="contentValue"
                        type="text"
                        placeholder="请输入文章内容"
                        class="login-input-item"
        ></validate-input>
      </div>
      <template #submit>
        <div class="login-btn-wrap">
          <span class="btn btn-outline-success"> 发表文章 </span>
        </div>
      </template>
    </validate-form>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import ValidateForm from '@/components/ValidateForm.vue';
import ValidateInput from '@/components/ValidateInput.vue';
import {RulesProp} from '@/common/inputRules';

export default defineComponent({
  name: 'CreatePost',
  components: {ValidateInput, ValidateForm},
  setup() {
    const titleRules: RulesProp = [
      {type: 'required', message: '电子邮箱地址不能为空'},
      {type: 'email', message: '请输入正确的电子邮箱格式'},
    ];
    const contentRules: RulesProp = [
      {type: 'required', message: '密码不能为空'},
      {type: 'password', message: '长度至少为8，至少含有一个字母和一个数字'},
    ];
    const titleValue = ref('Wangpf@163.com'); //  Wangpf@163.com
    const contentValue = ref('w12345678'); // w12345678
    return {titleRules, titleValue, contentRules, contentValue};
  }
});
</script>

<style lang="scss" scoped>

.CreatePostPage {
  margin: 76px auto 0;
  
  .login-btn-wrap{
    text-align: center;
    margin: 24px 0;
    >span{
      padding: 8px 36px;
    }
  }
}
</style>
