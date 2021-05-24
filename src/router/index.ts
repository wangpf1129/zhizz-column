import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import ColumnDetail from '@/components/ColumnDetail.vue';
import Signup from '@/views/Signup.vue';
import CreatePost from '@/components/CreatePost.vue';

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
      component: Login
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
      component: CreatePost
    },
  ]
});

export default router;
