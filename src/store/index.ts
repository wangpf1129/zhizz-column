import {Commit, createStore} from 'vuex';
import axios from 'axios';

export interface UserProps {
  isLogin: boolean;
  nickName?: string;
  _id?: string;
  column?: string;
  email?: string;
}

interface GlobalErrorProps {
  status: boolean;
  message?: string;
}

export interface GlobalDataProps {
  error: GlobalErrorProps;
  token: string;
  isLoading: boolean;
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

const getAndCommit = async (url: string, mutationsName: string, commit: Commit) => {
  const {data} = await axios.get(url);
  commit(mutationsName, data);
};
const postAndCommit = async (url: string, mutationsName: string, commit: Commit, payload: any) => {
  const {data} = await axios.post(url, payload);
  commit(mutationsName, data);
  return data;
};
const store = createStore<GlobalDataProps>({
  state: {
    error: {status: false},
    token: localStorage.getItem('columnToken') || '',
    isLoading: false,
    columns: [],
    posts: [],
    user: {isLogin: false}
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
    },
    setLoading(state, status) {
      state.isLoading = status;
    },
    setError(state, err: GlobalErrorProps) {
      console.log(err);
      state.error = err;
    },
    login(state, rawData) {
      const {token} = rawData.data;
      state.token = token;
      localStorage.setItem('columnToken', token);
      axios.defaults.headers.Authorization = `Bearer ${token}`;
    },
    fetchCurrentUser(state, rawData) {
      state.user = {isLogin: true, ...rawData.data};
    }
  },
  actions: {
    fetchColumns({commit}) {
      getAndCommit('/columns', 'fetchColumns', commit);
    },
    fetchColumn({commit}, Cid) {
      getAndCommit(`/columns/${Cid}`, 'fetchColumn', commit);
    },
    fetchPosts({commit}, Cid) {
      getAndCommit(`/columns/${Cid}/posts`, 'fetchPosts', commit);
    },
    fetchCurrentUser({commit}) {
      getAndCommit(`/user/current`, 'fetchCurrentUser', commit);
    },
    login({commit}, payload) {
      return postAndCommit('/user/login', 'login', commit, payload);
    },
    loginAndFetchCurrentUser({dispatch}, loginData) {
      return dispatch('login', loginData).then(() => {
        return dispatch('fetchCurrentUser');
      });
    }
  }
});

export default store;
