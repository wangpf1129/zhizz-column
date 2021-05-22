<template>
  <li class="dropdown-option" :class="{'is-disable': disabled}">
    <a href="#" class="dropdown-option-item dropdown-item">
      <slot></slot>
    </a>
  </li>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'DropDownItem',
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  },
});
</script>

<style lang="scss" scoped>
.dropdown-option {
  &.is-disable {
    pointer-events: none;
    background-color: transparent;
  }
  
  .dropdown-option-item {
    font-size: 14px;
    padding: 13px 16px;
    color: #8590a6;
    outline: none;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    vertical-align: middle;
  }
}
</style>
