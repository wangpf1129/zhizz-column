<template>
  <teleport to="#back">
    <div class="loadingContainer" :style="{backgroundColor:background}">
      <div class="loading-content">
        <div class="spinner-border text-success" role="status"></div>
        <p v-if="text" class="text-success small">{{ text }}</p>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import {defineComponent, onUnmounted} from 'vue';

export default defineComponent({
  name: 'Loader',
  props: {
    text: {
      type: String,
      default: ''
    },
    background: {
      type: String,
      default: ''
    }
  },
  setup() {
    const node = document.createElement('div');
    node.id = 'back';
    document.body.appendChild(node);
    onUnmounted(() => {
      document.body.removeChild(node);
    });
    return {};
  }
});
</script>

<style lang="scss" scoped>
.loadingContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, .5);
  z-index: 100;
  
  .loading-content {
    text-align: center;
    
    p {
      margin-top: 10px;
      font-size: 16px;
    }
  }
}
</style>
