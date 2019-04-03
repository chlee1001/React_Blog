import { createAction, handleActions } from 'redux-actions';
import { applyPenders } from 'redux-pender';
import * as api from '../../lib/api';
import { updateObject } from '../../lib/common';

const INITIALIZE = 'post/INITIALIZE';
const GET_POST = 'post/GET_POST';
const GET_COMMENTS = 'post/GET_COMMENTS';

export const initialize = createAction(INITIALIZE);
export const getPost = createAction(GET_POST, api.getPost);
export const getComments = createAction(GET_COMMENTS, api.getComments);

const initialState = {
  post: null,
  comments: null
};

const reducer = handleActions(
  {
    [INITIALIZE]: state => initialState
  },
  initialState
);

export default applyPenders(reducer, [
  {
    type: GET_POST,
    onSuccess: (state, action) => {
      return updateObject(state, {
        post: action.payload.data
      });
    }
  },
  {
    type: GET_COMMENTS,
    onSuccess: (state, action) => {
      return updateObject(state, {
        comments: action.payload.data
      });
    }
  }
]);
