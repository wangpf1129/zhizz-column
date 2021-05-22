<template>
  <div class="ColumnPageHeader">
    <nav class="header navbar bg-body justify-content-between px-4 py-0">
      <a class="headerTitle navbar-brand" href="#"> 清栀专栏 </a>
      <ul v-if="!user.isLogin" class="headerButton list-inline mb-0">
        <li class="list-inline-item">
          <a href="#" class="btn btn-outline-success  my-2 px-4 "> 登录 </a>
          <a href="#" class="btn btn-outline-success  my-2 px-4"> 注册 </a>
        </li>
      </ul>
      <ul v-else class="headerButton list-inline mb-0">
        <li class="list-inline-item">
          <drop-down :title="user.name"></drop-down>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import DropDown from '@/components/DropDown.vue';

export interface UserProps {
  isLogin: boolean;
  id?: number;
  name?: string;
}

export default defineComponent({
  name: 'GlobalHeader',
  components: {DropDown},
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
