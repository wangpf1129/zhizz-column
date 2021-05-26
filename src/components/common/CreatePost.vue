<template>
  <div class="CreatePostPage">
    <h4>新建文章</h4>
    <validate-form @form-submit="onFormSubmit">
      <input type="file" name="file" @change="handleFileChange" />
      <div class="mb-3">
        <validate-input
          input-title="文章标题"
          :rules="titleRules"
          v-model:input-value="titleValue"
          type="text"
          placeholder="请输入文章标题"
          class="login-input-item"
        ></validate-input>
      </div>
      <div class="mb-3">
        <validate-input
          input-title="文章详情"
          tag="textarea"
          rows="10"
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
import { defineComponent, ref } from 'vue'
import ValidateForm from '@/components/content/ValidateForm.vue'
import ValidateInput from '@/components/content/ValidateInput.vue'
import { RulesProp } from '@/common/inputRules'
import store, { PostProps } from '@/store'
import router from '@/router'
import axios from 'axios'

export default defineComponent({
  name: 'CreatePost',
  components: { ValidateInput, ValidateForm },
  setup() {
    const titleRules: RulesProp = [
      { type: 'required', message: '文章标题不能为空' },
    ]
    const contentRules: RulesProp = [
      { type: 'required', message: '文章内容不能为空' },
    ]
    const titleValue = ref('') //  Wangpf@163.com
    const contentValue = ref('') // w12345678
    const onFormSubmit = (result: boolean) => {
      if (result) {
        const { column } = store.state.user
        if (column) {
          const newPost: PostProps = {
            title: titleValue.value,
            content: contentValue.value,
            column: column,
          }
          store.commit('createNewPost', newPost)
          router.push({ name: 'ColumnDetail', params: { id: column } })
        }
      }
    }
    const handleFileChange = (event: Event) => {
      const target = event.target as HTMLInputElement
      const files = target.files
      if (files) {
        const uploadedFile = files[0]
        const formData = new FormData()
        formData.append(uploadedFile.name, uploadedFile)
        axios
          .post('/upload', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
          .then((resp) => {
            console.log(resp)
          })
      }
    }
    return {
      titleRules,
      titleValue,
      contentRules,
      contentValue,
      onFormSubmit,
      handleFileChange,
    }
  },
})
</script>

<style lang="scss" scoped>
.CreatePostPage {
  margin: 76px auto 0;

  .login-btn-wrap {
    text-align: center;
    margin: 24px 0;

    > span {
      padding: 8px 36px;
    }
  }
}
</style>
