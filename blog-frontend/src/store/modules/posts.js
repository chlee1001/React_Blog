import { createAction, handleActions, type ActionType } from 'redux-actions';
import produce from 'immer';
import * as api from '../../lib/api';
import { applyPenders, type ResponseAction } from '../../lib/common';
import { Map } from 'immutable';
import { pender } from 'redux-pender';

export type TocItem = {
  anchor: string,
  level: number,
  text: string
};

/* ACTION TYPE */
const READ_POST = 'posts/READ_POST';
const UNLOAD_POST = 'posts/UNLOAD_POST';
const SET_TOC = 'posts/SET_TOC';
const ACTIVATE_HEADING = 'posts/ACTIVATE_HEADING';
const TOGGLE_ASK_REMOVE = 'posts/TOGGLE_ASK_REMOVE';
const GET_SEQUENCES = 'posts/GET_SEQUENCES';

type OpenCommentRemovePayload = { commentId: string, parentId: ?string };

// action creators

export interface PostsActionCreators {
  readPost(payload: api.ReadPostPayload): any;
  unloadPost(): any;
  setToc(payload: ?(TocItem[])): any;
  activateHeading(payload: string): any;
  toggleAskRemove(): any;
  getSequences(postId: string): any;
}

export const actionCreators = {
  readPost: createAction(READ_POST, api.readPost),
  unloadPost: createAction(UNLOAD_POST),
  setToc: createAction(SET_TOC, (toc: ?(TocItem[])) => toc),
  activateHeading: createAction(
    ACTIVATE_HEADING,
    (headingId: string) => headingId
  ),
  toggleAskRemove: createAction(TOGGLE_ASK_REMOVE),
  getSequences: createAction(GET_SEQUENCES, api.getPostSequences)
};

type SetTocAction = ActionType<typeof actionCreators.setToc>;
type ActivateHeadingAction = ActionType<typeof actionCreators.activateHeading>;
type OpenCommentRemoveAction = ActionType<
  typeof actionCreators.openCommentRemove
>;
export type Categories = { id: string, name: string, url_slug: string }[];

export type PostData = {
  id: string,
  title: string,
  body: string,
  thumbnail: ?string,
  is_markdown: boolean,
  is_private: boolean,
  released_at: string,
  created_at: string,
  updated_at: string,
  tags: string[],
  categories: Categories,
  url_slug: string,
  user: {
    username: string,
    id: string,
    thumbnail: ?string,
    short_bio: ?string
  },
  meta: {
    code_theme: string,
    short_description: ?string
  }
};

export type PostSequence = {
  id: string,
  title: string,
  body: string,
  meta: ?{
    code_theme: string,
    short_description: string
  },
  url_slug: string,
  created_at: string,
  released_at: string
};

export type Posts = {
  post: ?PostData,
  toc: ?(TocItem[]),
  activeHeading: ?string,
  sequences: ?(PostSequence[]),
  askRemove: boolean
};

// initial state
const initialState: Posts = {
  post: null,
  toc: null,
  activeHeading: null,
  sequences: [],
  askRemove: false
};

// reducer

const reducer = handleActions(
  {
    [UNLOAD_POST]: (state, action) => {
      return initialState;
    },
    [SET_TOC]: (state, action: SetTocAction) => {
      return produce(state, draft => {
        draft.toc = action.payload;
      });
    },
    [ACTIVATE_HEADING]: (state, action: ActivateHeadingAction) => {
      return produce(state, draft => {
        draft.activeHeading = action.payload;
      });
    },
    [TOGGLE_ASK_REMOVE]: state => {
      return {
        ...state,
        askRemove: !state.askRemove
      };
    }
  },
  initialState
);

export default applyPenders(reducer, [
  {
    type: READ_POST,
    onSuccess: (state, action) => {
      console.log(action);
      return produce(state, { posts: action.payload.data });
    }
  },
  {
    type: GET_SEQUENCES,
    onSuccess: (state, action) => {
      return {
        ...state,
        sequences: action.payload.data
      };
    }
  }
]);
