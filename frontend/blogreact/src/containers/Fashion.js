import React, { Component } from 'react';
import { connect } from 'react-redux';
import ArticleComp from '../components/Article';
import PaginationComp from '../components/Pagination';
import * as actionPost from '../actions/posts';

class Fashion extends Component {
  componentDidMount() {
    const { getThumb } = this.props;
    getThumb('newest');
  }

  renderThumb = () => {
    const { thumbList } = this.props;
    const xhtml = [];
    thumbList.forEach(thumbItem => {
      xhtml.push(<ArticleComp key={thumbItem._id} postThumbItem={thumbItem} />);
    });
    return xhtml;
  };

  render() {
    return (
      <main className="fashion-page">
        <section className="posts">
          {this.renderThumb()}
          <PaginationComp />
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => {
  return {
    thumbList: state.posts.post_thumb.home
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getThumb: subject => {
      dispatch(actionPost.getThumb(subject));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Fashion);
