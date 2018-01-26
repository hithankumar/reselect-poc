import { combineReducers } from 'redux';
import PostReducer from './reducer_posts';
import SelectedPosts from './reducer_select_post';

const rootReducer = combineReducers({
  posts: PostReducer,
  selectedPosts : SelectedPosts
});
export default rootReducer;
