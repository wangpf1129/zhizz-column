<template>
  <div class="columnList row">
    <h3 class="ColumnHomeTitle">专栏 · 发现</h3>
    <div class="col-3 mb-4 mt-2 " v-for="column in columnList" :key="column._id">
      <div class="columnItem card h-100 shadow-sm">
        <div class="card-body text-center">
          <img :src="column.avatar.url" :alt="column.title" class="rounded-circle w-25 my-3 border border-light">
          <h5 class="columnTitle card-title mt-1">{{ column.title }}</h5>
          <p class="columnText card-text text-left">{{ column.description }}</p>
          <router-link :to="`/column/${column._id}`" class="btn btn-outline-success mt-2 mb-1"> 进入专栏</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, computed, PropType} from 'vue';
import {ColumnProps} from '@/common/testData';

export default defineComponent({
  name: 'ColumnList',
  props: {
    list: {type: Array as PropType<ColumnProps[]>, required: true}
  },
  setup(props) {
    const columnList = computed(() => {
      return props.list.map(column => {
        if (!column.avatar) {
          column.avatar = {
            url: require('@/assets/column.png')
          };
        } else {
          column.avatar.url = column.avatar.url + '?x-oss-process=image/resize,m_pad,h_50,w_50';
        }
        return column;
      });
    });
    return {columnList};
  }
});
</script>

<style lang="scss" scoped>
.columnList {
  margin: 48px 60px;
  
  .ColumnHomeTitle {
    font-size: 16px;
    line-height: 22px;
    font-weight: 600;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 0 3px 32px;
    width: 100%;
  }
  
  .columnItem {
    border: none;
  }
  
  .columnTitle {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  
  .columnText {
    font-size: 14px;
    line-height: 21px;
    min-height: 42px;
    margin-top: 7px;
    word-break: break-all;
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
