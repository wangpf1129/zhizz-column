<template>
  <div class="columnHomeTop">
    <h1 class="columnHomeTop-logo">清栀专栏</h1>
    <h2 class="columnHomeTop-subTitle">随心写作，自由表达</h2>
    <router-link to="/create" class="columnHomeTop-writeButton  btn btn-outline-success mt-2 mb-1">
      开始写文章
    </router-link>
  </div>
  <column-list :list="list"></column-list>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted} from 'vue';
import ColumnList from '@/components/ColumnList.vue';
import {useStore} from 'vuex';
import {GlobalDataProps} from '@/store';

export default defineComponent({
  name: 'Home',
  components: {ColumnList},
  setup() {
    const store = useStore<GlobalDataProps>();
    onMounted(() => {
      store.dispatch('fetchColumns');
    });
    const list = computed(() => store.state.columns);
    return {list};
  },
});
</script>

<style lang="scss" scoped>
.columnHomeTop {
  margin: 54px auto 0;
  background: url(../assets/columnBg.png) 50% no-repeat;
  height: 470px;
  position: relative;
  
  &::before {
    background: url(../assets/columnBg@2x.png) repeat-x;
    background-size: 20px 450px;
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .columnHomeTop-logo {
    background: url(../assets/columnLogo.png) 50% no-repeat;
    background-size: 129px 179px;
    height: 0;
    left: 50%;
    margin: 0 0 0 -65px;
    overflow: hidden;
    padding-top: 179px;
    position: absolute;
    top: 152px;
    width: 129px;
    
  }
  
  .columnHomeTop-subTitle {
    font-size: 18px;
    font-weight: 300;
    letter-spacing: .5em;
    line-height: 24px;
    margin: 0;
    position: absolute;
    text-align: center;
    top: 350px;
    width: 100%;
  }
  
  .columnHomeTop-writeButton {
    height: 38px;
    left: 50%;
    line-height: 26px;
    margin-left: -51px;
    position: absolute;
    top: 413px;
    width: 120px;
  }
}
</style>
