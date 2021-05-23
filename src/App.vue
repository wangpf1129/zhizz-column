<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <router-view></router-view>
    <footer class="text-center py-4 text-secondary bg-light mt-6">
      <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item"> © 2021 清栀专栏</li>
          <li class="list-inline-item"> 圆桌·发现</li>
          <li class="list-inline-item"> 联系我们</li>
          <li class="list-inline-item"> 更多</li>
        </ul>
      </small>
    </footer>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalHeader, {UserProps} from '@/components/GlobalHeader.vue';

const currentUser: UserProps = {
  isLogin: false,
  name: 'Wangpf',
};
export default defineComponent({
  name: 'App',
  components: {GlobalHeader},
  setup() {
    
    return {currentUser};
  },
});
</script>

<style lang="scss">
body {
  background-color: #fbfcfc;
  margin: 0 auto;
  font-size: 14px;
}
</style>
