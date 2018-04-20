import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
  //this is a live cycle method
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        Post Index
      </div>
    );
  }
}


export default connect(null, { fetchPosts })(PostsIndex);
