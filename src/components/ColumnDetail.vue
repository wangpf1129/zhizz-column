<template>
  <h4>
    <pre>{{ route }}</pre>
  </h4>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useRoute} from 'vue-router';

export default defineComponent({
  name: 'ColumnDetail',
  setup() {
    const route = useRoute();
    return {route};
  }
});
</script>

<style lang="scss" scoped>

</style>
