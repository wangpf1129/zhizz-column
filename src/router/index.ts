import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import ColumnDetail from '@/components/common/ColumnDetail.vue';
import Signup from '@/views/Signup.vue';
import CreatePost from '@/components/common/CreatePost.vue';
import store from '@/store';
import NotFound from '@/components/common/NotFound.vue';

const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {redirectAlreadyLogin: true}
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/column/:id',
      name: 'ColumnDetail',
      component: ColumnDetail
    },
    {
      path: '/create',
      name: 'CreatePost',
      component: CreatePost,
      meta: {requiredLogin: true}
    },
    {
      path: '/:w+',
      name: 'NotFound',
      component: NotFound,  // 引入 组件
    },
  ]
});
router.beforeEach((to, form, next) => {
  if (to.meta.requiredLogin && !store.state.user.isLogin) {  // 表示在 新建文章页面并且没有登录
    next({name: 'Login'});
  } else if (to.meta.redirectAlreadyLogin && store.state.user.isLogin) { // 表示在登录页面但已经登录过了
    next('/');
  } else {
    next();
  }
});
export default router;
