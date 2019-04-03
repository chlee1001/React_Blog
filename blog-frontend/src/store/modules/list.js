import { createAction, handleActions } from 'redux-actions';
import * as api from '../../lib/api';
import { applyPenders } from 'redux-pender';
import { updateObject } from '../../lib/common';

const GET_TRENDING_POSTS = 'list/GET_TRENDING_POSTS';
const PREFETCH_TRENDING_POSTS = 'list/PREFETCH_TRENDING_POSTS';

export const getTrendingPosts = createAction(
  GET_TRENDING_POSTS,
  api.getTrendingPosts
);
export const prefetchTrendingPosts = createAction(
  PREFETCH_TRENDING_POSTS,
  api.getTrendingPosts
);

const initialState = {
  posts: null
};

const reducer = handleActions({}, initialState);
export default applyPenders(reducer, [
  {
    type: GET_TRENDING_POSTS,
    onSuccess: (state, action) => {
      console.log(action);
      return updateObject(state, { posts: action.payload.data });
    }
  },
  {
    type: PREFETCH_TRENDING_POSTS,
    onSuccess: (state, action) => {
      console.log(action);
      const { data } = action.payload;
      return updateObject(state, draft => {
        const filtered = data.filter(post => !state.trendingMap[post.id]);
        draft.trending.prefetched = filtered;
        filtered.forEach(post => {
          draft.trendingMap[post.id] = true;
        });
        if (data && data.length === 0) {
          draft.trending.end = true;
        }
      });
    }
  }
]);
