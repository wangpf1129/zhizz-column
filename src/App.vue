<template>
  <div class="container">
    <global-header :user="currentUser"></global-header>
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColumnList, {ColumnProps} from '@/components/ColumnList.vue';
import GlobalHeader, {UserProps} from '@/components/GlobalHeader.vue';

const testData: ColumnProps[] = [
  {
    id: 1,
    title: '视界云科技社区',
    description: 'CDN（Content Delivery Network）：即内容分发网络。其基本思路是避开互联网上有可' +
      '能影响数据传输速度和稳定性的瓶颈和环节，使内容传输的更快、更稳定。通过在网络各处放置节点服务器所构成' +
      '的在现有的互联网基础之上的一层智能虚拟网络，CDN系统能够实时地根据网络流量和各节点的连接、负载状况以及到用' +
      '户的距离和响应时间等综合信息将用户的请求重新导向离用户最近的服务节点上。其目的是使用户可就近取得所需内容，' +
      '解决 Internet网络拥挤的状况，提高用户访问网站的响应速度。分享视频云服务行业最有料、专业、新鲜、新锐的知识和经验！'
  },
  {
    id: 2,
    title: '王喆的机器学习笔记',
    description: '关注推荐系统、计算广告等机器学习领域业界前沿',
    avatar: 'https://pic4.zhimg.com/v2-972e56bfb882ec72740655a58d5c14e9_l.jpg'
  },
  {
    id: 3,
    title: 'TD北美留学进化论',
    description: 'TestDaily致力于最负责任的北美考试咨询和干货的分享和传播，并通过大量的社群服务为出国党提供交流和陪伴，' +
      '已经成为最大的北美考试出国党线上社群。',
    avatar: 'https://pic3.zhimg.com/v2-948d45f54a0c68635c15b6cb0f118b5e_xs.jpg'
  },
  {
    id: 4,
    title: '动力总成黑科技',
    description: '本专栏以专业的角度介绍全球各大主机厂发动机的主流技术。保证篇篇精品，对技术，有态度！！！\n' +
      '（该专栏为技术专栏，不会放任何品牌推广）',
    avatar: 'https://pic1.zhimg.com/v2-da87359be087f8bd7eb0dc7d23a3add9_xs.jpg'
  },
  {
    id: 5,
    title: '动力总成黑科技',
    description: '本专栏以专业的角度介绍全球各大主机厂发动机的主流技术。保证篇篇精品，对技术，有态度！！！\n' +
      '（该专栏为技术专栏，不会放任何品牌推广）',
    avatar: 'https://pic1.zhimg.com/v2-da87359be087f8bd7eb0dc7d23a3add9_xs.jpg'
  },
  {
    id: 6,
    title: '动力总成黑科技',
    description: '本专栏以专业的角度介绍全球各大主机厂发动机的主流技术。保证篇篇精品，对技术，有态度！！！\n' +
      '（该专栏为技术专栏，不会放任何品牌推广）',
    avatar: 'https://pic1.zhimg.com/v2-da87359be087f8bd7eb0dc7d23a3add9_xs.jpg'
  },
  {
    id: 7,
    title: '动力总成黑科技',
    description: '本专栏以专业的角度介绍全球各大主机厂发动机的主流技术。保证篇篇精品，对技术，有态度！！！\n' +
      '（该专栏为技术专栏，不会放任何品牌推广）',
    avatar: 'https://pic1.zhimg.com/v2-da87359be087f8bd7eb0dc7d23a3add9_xs.jpg'
  },
];
const currentUser: UserProps = {
  isLogin: true,
  name: 'Wangpf'
};
export default defineComponent({
  name: 'App',
  components: {GlobalHeader, ColumnList},
  setup() {
    return {list: testData, currentUser};
  }
});
</script>

<style lang="scss">
body {
  background-color: #fbfcfc;
  margin: 0 auto;
  font-size: 14px;
}
</style>
