import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTrendingPosts, getMorePosts } from 'store/modules/list';
import PostList from 'components/list/PostList/PostCardList';
import throttle from 'lodash/throttle';
import { getScrollBottom } from 'lib/common';

type Props = {
  width: number,
  hasEnded: boolean
};

class PostListContainer extends Component<Props> {
  prevCursor: ?string = null;

  prefetch = async () => {
  //  preventStickBottom();
    this.onScroll();
  };

  initialize = async () => {
    try {
      await this.props.getTrendingPosts();
      this.prefetch();
    } catch (e) {
      console.log(e);
    }
  };
  onScroll = throttle(() => {
    const scrollBottom = getScrollBottom();
    if (scrollBottom > 1000) return;
    this.prefetch();
  }, 250);

  listenScroll = () => {
    window.addEventListener('scroll', this.onScroll);
  };

  unlistenScroll = () => {
    window.removeEventListener('scroll', this.onScroll);
  };
  componentDidMount() {
    this.initialize();
    this.listenScroll();
  }
  componentWillUnmount() {
    this.unlistenScroll();
  }

  render() {
    const { posts } = this.props;
    return <PostList posts={posts} width={this.props.width} hasEnded={false} />;
  }
}

export default connect(
  ({ list, base }) => ({
    posts: list.posts,
    width: base.windowWidth
  }),
  {
    getTrendingPosts
  }
)(PostListContainer);
