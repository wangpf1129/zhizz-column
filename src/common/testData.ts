interface ImageProps {
  _id?: string;
  url?: string;
  createdAt?: string
}

export interface ColumnProps {
  _id: string;
  title: string;
  avatar?: ImageProps;
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
