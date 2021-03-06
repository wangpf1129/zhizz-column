import {createApp} from 'vue';
import App from './App.vue';
import router from '@/router';
import store from '@/store';
import axios from 'axios';


axios.defaults.baseURL = 'api';
axios.interceptors.request.use(config => {
  store.commit('setError', {status: false, message: ''});
  store.commit('setLoading', true);
  return config;
});
axios.interceptors.response.use(config => {
  store.commit('setLoading', false);
  return config;
}, err => {
  const {error} = err.response.data;
  store.commit('setError', {status: true, message: error});
  store.commit('setLoading', false);
  return Promise.reject(error);
});
const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');
