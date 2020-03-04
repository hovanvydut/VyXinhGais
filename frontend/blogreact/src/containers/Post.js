import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchBarComp from '../components/SearchBar';
import CategoriesComp from '../components/Categories';
import PopularArticleComp from '../components/PopularArticle';
import HashTagComp from '../components/HaskTag';
import NewsLetterComp from '../components/NewsLetter';
import PostComp from '../components/Post';
import * as postAction from '../actions/posts';

class Post extends Component {
  componentDidMount() {
    const { match, getPost } = this.props;
    const { linkPost } = match.params;
    getPost(linkPost);
  }

  render() {
    const { postDetail } = this.props;
    return (
      <main>
        <section className="posts full-post">
          <PostComp postDetail={postDetail} />
        </section>
        <aside className="sidebar">
          <SearchBarComp />
          <CategoriesComp />
          <PopularArticleComp />
          <HashTagComp />
          <NewsLetterComp />
          <div className="categories">
            <h3 className="categories__title">Archives</h3>
            <ul className="categories-list">
              <li>
                <a href="/href">
                  Decob14 2018 <span>(6)</span>
                </a>
              </li>
              <li>
                <a href="/href">
                  September 2018 <span>(6)</span>
                </a>
              </li>
              <li>
                <a href="/href">
                  August 2018 <span>(6)</span> <span>(6)</span>
                </a>
              </li>
              <li>
                <a href="/href">
                  July 2018 <span>(6)</span>
                </a>
              </li>
              <li>
                <a href="/href">
                  June 2018 <span>(6)</span>
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </main>
    );
  }
}

Post.propTypes = {
  match: PropTypes.object,
  getPost: PropTypes.func,
  postDetail: PropTypes.object
};

const mapStateToProps = state => {
  return {
    postDetail: state.posts.post_detail
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPost: linkPost => dispatch(postAction.getPost(linkPost))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
