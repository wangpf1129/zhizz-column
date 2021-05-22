<template>
  <div class="userDropDown dropdown">
    <a href="#" class="btn btn-outline-success my-2 px-4 dropdown-toggle" @click.prevent="toggleOpen">{{ title }}</a>
    <transition name="fade">
      <ul class="userDropDownBox dropdown-menu" :style="{display:'block'}" v-if="isOpen">
        <slot></slot>
      </ul>
    </transition>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'DropDown',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    const isOpen = ref(false);
    const toggleOpen = () => {
      isOpen.value = !isOpen.value;
    };
    return {
      isOpen, toggleOpen
    };
  }
});
</script>

<style lang="scss" scoped>
.userDropDown {
  outline: none;
  cursor: pointer;
  
  .userDropDownBox {
    margin-top: 15px;
    border: none;
    box-shadow: 0 5px 20px rgb(18 18 18 / 10%);
    
    :hover {
      background-color: #f6f6f6;
    }
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
}
</style>
