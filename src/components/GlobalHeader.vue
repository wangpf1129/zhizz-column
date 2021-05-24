<template>
  <div class="ColumnPageHeader">
    <nav class="header navbar bg-body justify-content-between px-4 py-0">
      <router-link to="/" class="headerTitle navbar-brand"> 清栀专栏</router-link>
      <ul v-if="!user.isLogin" class="headerButton list-inline mb-0">
        <li class="list-inline-item">
          <router-link to="/login" class="btn btn-outline-success  my-2 px-4 "> 登录</router-link>
          <router-link to="/signup" class="btn btn-outline-success  my-2 px-4"> 注册</router-link>
        </li>
      </ul>
      <ul v-else class="headerButton list-inline mb-0">
        <li class="list-inline-item">
          <drop-down :title="user.name">
            <drop-down-item path="/create">新建文章</drop-down-item>
            <drop-down-item> 编辑资料</drop-down-item>
            <drop-down-item> 退出登录</drop-down-item>
          </drop-down>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import DropDown from '@/components/DropDown.vue';
import DropDownItem from '@/components/DropDownItem.vue';
import {UserProps} from '@/store';

export default defineComponent({
  name: 'GlobalHeader',
  components: {DropDownItem, DropDown},
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  },
});
</script>

<style lang="scss" scoped>
.ColumnPageHeader {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1001;
  width: 100%;
  height: 52px;
  
  .header {
    box-sizing: border-box;
    box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
    
    .btn {
      margin-left: 15px;
    }
    
    .headerTitle {
      color: #40babf;
      margin-left: 66px;
    }
    
    .headerButton {
      margin-right: 66px;
    }
  }
  
}
</style>
