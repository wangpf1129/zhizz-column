import {createStore} from 'vuex';
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
  _id: string;
  title: string;
  excerpt?: string;
  content?: string;
  image?: ImageProps;
  createdAt: string;
  column: string
}


const store = createStore<GlobalDataProps>({
  state: {
    columns: [],
    posts: [],
    user: {isLogin: true, name: 'Wangpf'}
  },
  getters: {
    getColumnById: (state) => (id: string) => {
      return state.columns.find(column => column._id === id);
    },
    getPostsByCid: (state) => (Cid: string) => {
      return state.posts.filter(post => post.column === Cid);
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
      state.columns = rawData.data.list;
    },
    fetchColumn(state, rawData) {
      state.columns = [rawData.data];
    },
    fetchPosts(state, rawData) {
      state.posts = rawData.data.list;
    }
  },
  actions: {
    fetchColumns({commit}) {
      axios.get('/columns').then(resp => {
        commit('fetchColumns', resp.data);
      });
    },
    fetchColumn({commit}, Cid) {
      axios.get(`/columns/${Cid}`).then(resp => {
        commit('fetchColumn', resp.data);
      });
    },
    fetchPosts({commit}, Cid) {
      axios.get(`/columns/${Cid}/posts`).then(resp => {
        commit('fetchPosts', resp.data);
      });
    },
  }
});

export default store;
