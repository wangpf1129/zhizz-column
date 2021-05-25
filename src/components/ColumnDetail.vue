<template>
  <div v-if="column" class="columnDetailPage w-75 mx-auto">
    <div class="columnInfo row  border-bottom py-3 align-items-center">
      <div class="col-4 text-center">
        <img :src="column.avatar && column.avatar.url"
             :alt="column.title" class="rounded-circle border">
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
import {computed, defineComponent, onMounted} from 'vue';
import {useRoute} from 'vue-router';
import PostList from '@/components/PostList.vue';
import {useStore} from 'vuex';
import {GlobalDataProps} from '@/store';

export default defineComponent({
  name: 'ColumnDetail',
  components: {PostList},
  setup() {
    const route = useRoute();
    const store = useStore<GlobalDataProps>();
    const currentId = route.params.id;
    onMounted(() => {
      store.dispatch('fetchColumn', currentId);
      store.dispatch('fetchPosts', currentId);
    });
    const column = computed(() => store.getters.getColumnById(currentId));
    const list = computed(() => store.getters.getPostsByCid(currentId));
    return {column, list};
  }
});
</script>

<style lang="scss" scoped>
.columnDetailPage {
  margin: 108px auto 0;
  
  .columnInfo {
    min-height: 180px;
    
    img {
      width: 102px;
      height: 102px;
    }
    
    .text-muted {
      word-break: break-all;
      display: -webkit-box;
      text-overflow: ellipsis;
      overflow: hidden;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
