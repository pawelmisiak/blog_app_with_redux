import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';
// Link is for navigation instead of using anchor tags
import { Link } from 'react-router-dom';

class PostsIndex extends Component {
  //this is a live cycle method
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    // this is an object that does not contain built in map function
    // this is why we need to use loadash function for objects :D
    return _.map(this.props.posts, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });
  }

  render() {
    // console.log(this.props.posts);
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

// return list of posts
function mapStateToProps(state) {
  return { posts: state.posts };
}


export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
