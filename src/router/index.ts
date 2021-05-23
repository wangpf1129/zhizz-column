import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';

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
    }
  ]
});

export {router};
