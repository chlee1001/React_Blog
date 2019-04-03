// @flow
import { bindActionCreators } from 'redux';
import store from './index';
import {
  actionCreators as postsActions,
  type PostsActionCreators
} from './modules/posts';

const { dispatch } = store;

export const PostsActions: PostsActionCreators = bindActionCreators(
  postsActions,
  dispatch
);
