import {createStore} from 'vuex';
import {testData, testPosts, ColumnProps, PostProps} from '@/common/testData';

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
    columns: testData,
    posts: testPosts,
    user: {isLogin: true, name: 'Wangpf', columnId: 1}
  },
  getters: {
    getColumnById: (state) => (id: number) => {
      return state.columns.find(column => column.id === id);
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
    }
  }
});

export default store;
