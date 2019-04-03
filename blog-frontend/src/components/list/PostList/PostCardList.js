import React, { Fragment } from 'react';
import PostCard from './PostCard';

import './PostCardList.scss';

const createArray = length => Array.from(Array(length).keys());
const getColumnCount = width => {
  const xWide = 1920;
  const wide = 1600;
  const xLarge = 1200;
  const large = 1024;

  if (!width) return 1;

  if (width < large) return 1;
  if (width < xLarge) return 2;
  if (width < wide) return 3;
  if (width < xWide) return 4;
  return 5;
};

const PostCardList = ({ posts }) => {
  if (!posts) return null;
  const postList = posts.map(post => (
    <PostCard
      key={post.id}
      id={post.id}
      thumbnail={post.thumbnail}
      username={post.user.username}
      userThumbnail={post.user.thumbnail}
      title={post.title}
      body={(post.meta && post.meta.short_description) || post.body}
      date={post.released_at}
      urlSlug={post.url_slug}
      commentsCount={post.comments_count}
      isPrivate={post.is_private}
    />
  ));

  return (
    <Fragment>
      <div className="PostCardList">
        {postList && postList.length === 0 && (
          <div className="empty-list">아직 작성한 포스트가 없습니다.</div>
        )}
        {postList}
      </div>
    </Fragment>
  );
};

PostCardList.defaultProps = {
  posts: [],
  oneColumn: false,
  width: 0,
  placeholderCount: 10,
  hideUsername: false
};

export default PostCardList;
