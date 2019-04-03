import axios from 'axios';
import queryString from 'query-string';

const client = axios.create({
  baseURL: 'https://uvvg89p68d.execute-api.ap-northeast-2.amazonaws.com/dev'
});
//?offset=20
//?offset=40.....

export const getTrendingPosts = (offset: ?number) => {
  const query = offset ? `?offset=${offset}` : '';
  return client.get(`/posts/trending${query}`);
};

export const getPost = ({ username, urlSlug }) =>
  client.get(`/posts/@${username}/${urlSlug}`);

export const getComments = postId => client.get(`/posts/${postId}/comments`);

export type ReadPostPayload = {
  username: string,
  urlSlug: string
};

export const readPost = ({ username, urlSlug }: ReadPostPayload) =>
  client.get(`/posts/@${username}/${urlSlug}`);

export const getPostSequences = (postId: string) => {
  return client.get(`/posts/sequences?post_id=${postId}`);
};
