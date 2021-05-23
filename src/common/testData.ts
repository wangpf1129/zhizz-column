export interface ColumnProps {
  id: number;
  title: string;
  avatar?: string;
  description: string
}

export interface PostProps {
  id: number;
  title: string;
  content: string;
  image?: string;
  createdAt: string;
  columnId: number
}

export const testData: ColumnProps[] = [
  {
    id: 1,
    title: '视界云科技社区',
    description:
      'CDN（Content Delivery Network）：即内容分发网络。其基本思路是避开互联网上有可' +
      '能影响数据传输速度和稳定性的瓶颈和环节，使内容传输的更快、更稳定。通过在网络各处放置节点服务器所构成' +
      '的在现有的互联网基础之上的一层智能虚拟网络，CDN系统能够实时地根据网络流量和各节点的连接、负载状况以及到用' +
      '户的距离和响应时间等综合信息将用户的请求重新导向离用户最近的服务节点上。其目的是使用户可就近取得所需内容，' +
      '解决 Internet网络拥挤的状况，提高用户访问网站的响应速度。分享视频云服务行业最有料、专业、新鲜、新锐的知识和经验！',
  },
  {
    id: 2,
    title: '王喆的机器学习笔记',
    description: '关注推荐系统、计算广告等机器学习领域业界前沿',
    avatar: 'https://pic4.zhimg.com/v2-972e56bfb882ec72740655a58d5c14e9_l.jpg',
  },
  {
    id: 3,
    title: 'TD北美留学进化论',
    description:
      'TestDaily致力于最负责任的北美考试咨询和干货的分享和传播，并通过大量的社群服务为出国党提供交流和陪伴，' +
      '已经成为最大的北美考试出国党线上社群。',
    avatar: 'https://pic3.zhimg.com/v2-948d45f54a0c68635c15b6cb0f118b5e_xs.jpg',
  },
  {
    id: 4,
    title: '动力总成黑科技',
    description:
      '本专栏以专业的角度介绍全球各大主机厂发动机的主流技术。保证篇篇精品，对技术，有态度！！！\n' +
      '（该专栏为技术专栏，不会放任何品牌推广）',
    avatar: 'https://pic1.zhimg.com/v2-da87359be087f8bd7eb0dc7d23a3add9_xs.jpg',
  },
  {
    id: 5,
    title: '动力总成黑科技',
    description:
      '本专栏以专业的角度介绍全球各大主机厂发动机的主流技术。保证篇篇精品，对技术，有态度！！！\n' +
      '（该专栏为技术专栏，不会放任何品牌推广）',
    avatar: 'https://pic1.zhimg.com/v2-da87359be087f8bd7eb0dc7d23a3add9_xs.jpg',
  },
  {
    id: 6,
    title: '动力总成黑科技',
    description:
      '本专栏以专业的角度介绍全球各大主机厂发动机的主流技术。保证篇篇精品，对技术，有态度！！！\n' +
      '（该专栏为技术专栏，不会放任何品牌推广）',
    avatar: 'https://pic1.zhimg.com/v2-da87359be087f8bd7eb0dc7d23a3add9_xs.jpg',
  },
  {
    id: 7,
    title: '动力总成黑科技',
    description:
      '本专栏以专业的角度介绍全球各大主机厂发动机的主流技术。保证篇篇精品，对技术，有态度！！！\n' +
      '（该专栏为技术专栏，不会放任何品牌推广）',
    avatar: 'https://pic1.zhimg.com/v2-da87359be087f8bd7eb0dc7d23a3add9_xs.jpg',
  },
];


export const testPosts: PostProps[] = [
  {
    id: 1,
    title: '这是我见到四',
    content: '用 Vue.js + Vue Router 创建单页应用，感觉很自然：使用 Vue.js ，我们已经可以通过组合组件来组成应用程序，' +
      '当你要把 Vue Router 添加进来，我们需要做的是，将组件 (components) 映射到路由 (routes)，然后告诉 Vue Router ' +
      '在哪里渲染它们',
    image: 'https://pic1.zhimg.com/v2-da87359be087f8bd7eb0dc7d23a3add9_xs.jpg',
    createdAt: '2021-5-23 21:57:22',
    columnId: 1
  },
  {
    id: 2,
    title: '这是我见到四',
    content: '用 Vue.js + Vue Router 创建单页应用，感觉很自然：使用 Vue.js ，我们已经可以通过组合组件来组成应用程序，' +
      '当你要把 Vue Router 添加进来，我们需要做的是，将组件 (components) 映射到路由 (routes)，然后告诉 Vue Router ' +
      '在哪里渲染它们',
    image: 'https://pic1.zhimg.com/v2-da87359be087f8bd7eb0dc7d23a3add9_xs.jpg',
    createdAt: '2021-5-23 21:57:22',
    columnId: 2
  },
  {
    id: 3,
    title: '这是我见到四',
    content: '用 Vue.js + Vue Router 创建单页应用，感觉很自然：使用 Vue.js ，我们已经可以通过组合组件来组成应用程序，' +
      '当你要把 Vue Router 添加进来，我们需要做的是，将组件 (components) 映射到路由 (routes)，然后告诉 Vue Router ' +
      '在哪里渲染它们',
    image: 'https://pic1.zhimg.com/v2-da87359be087f8bd7eb0dc7d23a3add9_xs.jpg',
    createdAt: '2021-5-23 21:57:22',
    columnId: 3
  },
  {
    id: 4,
    title: '这是我见到四',
    content: '用 Vue.js + Vue Router 创建单页应用，感觉很自然：使用 Vue.js ，我们已经可以通过组合组件来组成应用程序，' +
      '当你要把 Vue Router 添加进来，我们需要做的是，将组件 (components) 映射到路由 (routes)，然后告诉 Vue Router ' +
      '在哪里渲染它们',
    image: 'https://pic1.zhimg.com/v2-da87359be087f8bd7eb0dc7d23a3add9_xs.jpg',
    createdAt: '2021-5-23 21:57:22',
    columnId: 4
  },
  {
    id: 5,
    title: '这是我见到四',
    content: '用 Vue.js + Vue Router 创建单页应用，感觉很自然：使用 Vue.js ，我们已经可以通过组合组件来组成应用程序，' +
      '当你要把 Vue Router 添加进来，我们需要做的是，将组件 (components) 映射到路由 (routes)，然后告诉 Vue Router ' +
      '在哪里渲染它们',
    image: 'https://pic1.zhimg.com/v2-da87359be087f8bd7eb0dc7d23a3add9_xs.jpg',
    createdAt: '2021-5-23 21:57:22',
    columnId: 5
  },
  {
    id: 6,
    title: '这是我见到四',
    content: '用 Vue.js + Vue Router 创建单页应用，感觉很自然：使用 Vue.js ，我们已经可以通过组合组件来组成应用程序，' +
      '当你要把 Vue Router 添加进来，我们需要做的是，将组件 (components) 映射到路由 (routes)，然后告诉 Vue Router ' +
      '在哪里渲染它们',
    image: 'https://pic1.zhimg.com/v2-da87359be087f8bd7eb0dc7d23a3add9_xs.jpg',
    createdAt: '2021-5-23 21:57:22',
    columnId: 5
  },
  {
    id: 7,
    title: '这是我见到四',
    content: '用 Vue.js + Vue Router 创建单页应用，感觉很自然：使用 Vue.js ，我们已经可以通过组合组件来组成应用程序，' +
      '当你要把 Vue Router 添加进来，我们需要做的是，将组件 (components) 映射到路由 (routes)，然后告诉 Vue Router ' +
      '在哪里渲染它们',
    createdAt: '2021-5-23 21:57:22',
    columnId: 5
  },
];
