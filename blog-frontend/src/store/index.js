// @flow
import configure from './configure';

import type { Posts } from './modules/posts';

const store = configure(
  typeof window === 'undefined' ? undefined : window.__REDUX_STATE__
);

export default store;

export type State = {
  posts: Posts,

  pender: {
    pending: any,
    success: any,
    failure: any
  }
};
