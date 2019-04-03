import React, { Component } from 'react';
import PostViewer from '../../components/post/PostViewer';
import { connect } from 'react-redux';
import * as postActions from 'store/modules/post';
import { bindActionCreators } from 'redux';

class PostViewerContainer extends Component {
  initialize = async () => {
    const { PostActions, params } = this.props;
    const { username, urlSlug } = params;
    PostActions.initialize();
    try {
      await PostActions.getPost({ username, urlSlug });
      if (!this.props.post) return;
    } catch (e) {}
  };
  componentDidMount() {
    this.initialize();
  }

  render() {
    const { post } = this.props;
    return (
      <>
        <PostViewer post={post} />
      </>
    );
  }
}

export default connect(
  ({ post }) => ({
    post: post.post,
  }),
  dispatch => ({
    PostActions: bindActionCreators(postActions, dispatch)
  })
)(PostViewerContainer);
