<template>
  <div class="columnFooter">
    <h3 class="columnFooter-title"> 在清栀中发现与创作 </h3>
    <footer class="text-center py-4 text-secondary">
      <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item"> © 2021 清栀专栏</li>
          <li class="list-inline-item"> 圆桌·发现</li>
          <li class="list-inline-item"> 联系我们</li>
          <li class="list-inline-item"> 更多</li>
        </ul>
      </small>
    </footer>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'ColumnFooter',
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.columnFooter {
  margin-top: 48px;
  margin-bottom: 46px;
  padding-top: 134px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: url(https://static.zhihu.com/heifetz/assets/bg@2x.033e5b2d.png) repeat-x;
  background-size: 20px 450px;
  display: flex;
  flex-direction: column;
  
  .columnFooter-title {
    border: solid #97ffd8;
    border-width: 1px 0;
    font-size: 18px;
    font-weight: 300;
    letter-spacing: 14px;
    padding: 26px 0;
    text-align: center;
    white-space: nowrap;
    width: 345px;
  }
}
</style>
