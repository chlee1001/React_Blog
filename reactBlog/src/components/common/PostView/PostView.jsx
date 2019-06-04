import React from 'react';
import styled from 'styled-components';
import { fromNow } from '../../../lib/common.js';
//import TriangleSpinner from '../common/TriangleSpinner';
import CircularProgress from '@material-ui/core/CircularProgress';

const PostViewerWrapper = styled.div`
  h1 {
    margin-bottom: 0;
  }
  .info {
    font-size: 0.75rem;
    color: #868e96;
    .middot {
      margin-left: 0.25rem;
      margin-right: 0.25rem;
    }
    margin-bottom: 2rem;
  }
  img {
    width: 100%;
    display: block;
  }
  .renderer-wrapper {
    margin-top: 2rem;
  }
`;

const PostView = ({ post }) => {
  console.log(post);
  if (!post) return <CircularProgress />;
 const { name, email, avatar } = post;
 
  return (
    <PostViewerWrapper>
      <div style={{ border: 'solid 1px #eee' }}>
        <img src={avatar} alt={name} width="50" height="50" />
        <h4>Name: {name}</h4>
        <h4>Email: {email}</h4>
      </div>
      {/* <h1>{name}.</h1>
      <div className="info">
        <span>{fromNow(released_at)}</span>
      </div>
      {avator && <img src={avator} alt="thumbnail" />} */}
    </PostViewerWrapper>
  );
};

export default PostView;
