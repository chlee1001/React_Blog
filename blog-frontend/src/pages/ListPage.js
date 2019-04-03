import React from 'react';
import PageTemplate from '../components/common/Main/';
import PostList from '../container/list/PostListContainer';

const ListPage = () => {
  return (
    <PageTemplate>
      <PostList />
    </PageTemplate>
  );
};

export default ListPage;
