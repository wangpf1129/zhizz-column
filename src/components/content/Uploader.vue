<template>
  <div class="file-upload">
    <button class="btn btn-outline-success" @click.prevent="triggerUpload">
      <span v-if="fileStatus === 'loading'">正在上传中...</span>
      <span v-else-if="fileStatus === 'success'">上传成功</span>
      <span v-else-if="fileStatus === 'error'">上传失败</span>
      <span v-else>点击上传</span>
    </button>
    <input class="file-input d-none" type="file" name="file"
           ref="fileInputRef"
           @change="handleFileStatusChange"
    >
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import axios from 'axios';

type UploadStatus = 'ready' | 'loading' | 'success' | 'error'
export default defineComponent({
  name: 'Uploader',
  props: {
    action: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const fileInputRef = ref<null | HTMLInputElement>(null);
    const fileStatus = ref<UploadStatus>('ready');
    const triggerUpload = () => {
      if (fileInputRef.value) {
        fileInputRef.value.click();
      }
    };
    const handleFileStatusChange = (event: Event) => {
      const currentTarget = event.target as HTMLInputElement;
      if (currentTarget.files) {
        fileStatus.value = 'loading';
        const files = Array.from(currentTarget.files);
        const formData = new FormData();
        formData.append('file', files[0]);
        axios.post(props.action, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        }).then(resp => {
          console.log(resp);
          fileStatus.value = 'success';
        }).catch(err => {
          console.log(err);
          fileStatus.value = 'error';
        }).finally(() => {
          if (fileInputRef.value) {
            fileInputRef.value.value = '';
          }
        });
      }
    };
    return {fileInputRef, triggerUpload, fileStatus, handleFileStatusChange};
  }
});
</script>

<style lang="scss" scoped>

</style>
