import React from 'react';
//import PostTemplate from 'components/post/PostTemplate';
//import ScrollToTop from 'components/base/ScrollToTop';
import PostContainer from 'container/post/PostContainer';

const PostPage = ({ match }) => {
  return (

      
      <PostContainer params={match.params} />
  
  );
};

export default PostPage;
