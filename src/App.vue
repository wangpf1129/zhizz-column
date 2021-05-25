<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <h2>{{ error.message }}</h2>
    <loader v-if="isLoading" text="拼命加载中..." background="rgba(255,255,255,0.8)"></loader>
    <router-view></router-view>
    <column-footer></column-footer>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted} from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalHeader from '@/components/common/GlobalHeader.vue';
import ColumnFooter from '@/components/common/ColumnFooter.vue';
import {useStore} from 'vuex';
import {GlobalDataProps} from '@/store';
import Loader from '@/components/content/Loader.vue';
import axios from 'axios';

export default defineComponent({
  name: 'App',
  components: {Loader, ColumnFooter, GlobalHeader},
  setup() {
    const store = useStore<GlobalDataProps>();
    const currentUser = computed(() => store.state.user);
    const isLoading = computed(() => store.state.isLoading);
    const token = computed(() => store.state.token);
    const error = computed(() => store.state.error);
    onMounted(() => {
      if (!currentUser.value.isLogin && token.value) {
        axios.defaults.headers.common.Authorization = `Bearer ${token.value}`;
        store.dispatch('fetchCurrentUser');
      }
    });
    return {currentUser, isLoading, error};
  },
});
</script>

<style lang="scss">
body {
  background-color: #fbfcfc;
  margin: 0 auto;
  font-size: 14px;
}

.container {
  position: relative;
  background: url(https://static.zhihu.com/heifetz/assets/bg@2x.033e5b2d.png) repeat-x;
  background-size: 20px 450px;
}
</style>
