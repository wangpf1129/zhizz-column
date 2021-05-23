<template>
  <div class="columnDetailPage w-75 mx-auto">
    <div class="columnInfo row  border-bottom py-3 align-items-center">
      <div class="col-4 text-center">
        <img :src="column.avatar" :alt="column.title" class="rounded-circle border">
      </div>
      <div class="col-8">
        <h4>{{ column.title }}</h4>
        <p class="text-muted">{{ column.description }}</p>
      </div>
    </div>
    <post-list :list="list"></post-list>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useRoute} from 'vue-router';
import {testData, testPosts} from '@/common/testData';
import PostList from '@/components/PostList.vue';

export default defineComponent({
  name: 'ColumnDetail',
  components: {PostList},
  setup() {
    const route = useRoute();
    const currentId = +route.params.id;
    const column = testData.find(c => c.id === currentId);
    const list = testPosts.filter(l => l.columnId === currentId);
    return {column, list};
  }
});
</script>

<style lang="scss" scoped>
.columnDetailPage {
  margin: 108px auto 0;
  
  .columnInfo {
  }
}
</style>
