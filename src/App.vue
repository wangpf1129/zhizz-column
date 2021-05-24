<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <router-view></router-view>
    <column-footer></column-footer>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent} from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalHeader from '@/components/GlobalHeader.vue';
import ColumnFooter from '@/components/ColumnFooter.vue';
import {useStore} from 'vuex';
import {GlobalDataProps} from '@/store';

export default defineComponent({
  name: 'App',
  components: {ColumnFooter, GlobalHeader},
  setup() {
    const store = useStore<GlobalDataProps>();
    const currentUser = computed(() => store.state.user);
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

.container {
  background: url(https://static.zhihu.com/heifetz/assets/bg@2x.033e5b2d.png) repeat-x;
  background-size: 20px 450px;
}
</style>
