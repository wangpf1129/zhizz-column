import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import ColumnDetail from '@/components/ColumnDetail.vue';

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
      path: '/column/:id',
      name: 'ColumnDetail',
      component: ColumnDetail
    }
  ]
});

export {router};
