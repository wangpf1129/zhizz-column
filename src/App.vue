<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <router-view></router-view>
    <column-footer></column-footer>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalHeader, {UserProps} from '@/components/GlobalHeader.vue';
import ColumnFooter from '@/components/ColumnFooter.vue';

const currentUser: UserProps = {
  isLogin: false,
  name: 'Wangpf',
};
export default defineComponent({
  name: 'App',
  components: {ColumnFooter, GlobalHeader},
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
