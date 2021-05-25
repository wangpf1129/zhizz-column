import {createStore} from 'vuex';
import {testPosts, ColumnProps, PostProps} from '@/common/testData';
import axios from 'axios';

export interface UserProps {
  isLogin: boolean;
  name?: string;
  id?: number;
  columnId?: number;
}

export interface GlobalDataProps {
  columns: ColumnProps[];
  posts: PostProps[];
  user: UserProps
}

const store = createStore<GlobalDataProps>({
  state: {
    columns: [],
    posts: testPosts,
    user: {isLogin: false, name: 'Wangpf'}
  },
  getters: {
    getColumnById: (state) => (id: number) => {
      return state.columns.find(column => +column._id === id);
    },
    getPostsByCid: (state) => (Cid: number) => {
      return state.posts.filter(post => post.columnId === Cid);
    }
  },
  mutations: {
    login(state) {
      state.user = {...state.user, name: 'Wangpf', isLogin: true};
      console.log(state.user);
    },
    createNewPost(state, newPost) {
      state.posts.push(newPost);
    },
    fetchColumns(state, rawData) {
      console.log(rawData.data);
      state.columns = rawData.data.list;
    }
  },
  actions: {
    fetchColumns(context) {
      axios.get('/columns').then(resp => {
        context.commit('fetchColumns', resp.data);
      });
    }
  }
});

export default store;
