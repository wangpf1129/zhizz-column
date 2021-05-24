import {createStore} from 'vuex';
import {testData, testPosts, ColumnProps, PostProps} from '@/common/testData';

interface UserProps {
  isLoading: boolean;
  name?: string;
  id?: string;
}

export interface GlobalDataProps {
  column: ColumnProps[];
  posts: PostProps[];
  user: UserProps
}

const store = createStore<GlobalDataProps>({
  state: {
    column: testData,
    posts: testPosts,
    user: {isLoading: false}
  }
});

export default store;
