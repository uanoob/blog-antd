import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../store/post/thunk';
import { UIPost } from '../store/post/types';
import Posts from '../components/Posts';

const Blog = ({ posts, fetchPosts }: Props) => {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return posts.length !== 0 ? <Posts posts={posts} /> : null;
};

interface StateProps {
  posts: UIPost[];
}

interface DispatchProps {
  fetchPosts: any;
}

type Props = StateProps & DispatchProps;

const mapState = (state: any) => ({
  posts: state.posts.data,
});

const mapDispatch = {
  fetchPosts,
};

export default connect<StateProps, DispatchProps>(mapState, mapDispatch)(Blog);
