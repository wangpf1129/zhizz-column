<template>
  <div class="postList mt-4">
    <article class="postItem card mb-3 shadow-sm" v-for="post in list" :key="post._id">
      <div class="card-body">
        <h4>{{ post.title }}</h4>
        <div class="row my-3 align-items-center">
          <div v-if="post.image" class="col-3 text-center">
            <img :src="post.image.url" :alt="post.title" class="rounded-lg w-100">
          </div>
          <p :class="{'col-9':post.image}">{{ post.excerpt }}</p>
        </div>
        <span class="text-muted">{{ post.createdAt }}</span>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import {PostProps} from '@/store';

export default defineComponent({
  name: 'PostList',
  props: {
    list: {
      type: Array as PropType<PostProps[]>,
      required: true
    }
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.postItem {
  border: none !important;
}
</style>
