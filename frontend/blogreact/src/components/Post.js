import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Post extends Component {
  render() {
    const { postDetail } = this.props;
    const { title } = postDetail;
    return (
      <article>
        <h1 className="full-post__main-title">{title || null}</h1>
        <div className="full-post__para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis,
          eius mollitia suscipit, quisquam doloremque distinctio perferendis et
          doloribus unde architecto optio laboriosam porro adipisci sapiente
          officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore
          perferendis, enim praesentium omnis, iste doloremque quia officia
          optio deserunt molestiae voluptates soluta architecto tempora.
        </div>
        <div className="full-post__img">
          <img src="images/image_1.jpg" alt="image_2.jpg" />
        </div>
        <h2 className="full-post__subtitle">#2. Creative WordPress Themes</h2>
        <div className="full-post__para">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis,
          eius mollitia suscipit, quisquam doloremque distinctio perferendis et
          doloribus unde architecto optio laboriosam porro adipisci sapiente
          officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore
          perferendis, enim praesentium omnis, iste doloremque quia officia
          optio deserunt molestiae voluptates soluta architecto tempora.
        </div>
        <div className="full-post__img">
          <img src="images/image_2.jpg" alt="image_2.jpg" />
        </div>
        <div className="full-post__para">
          Quisquam esse aliquam fuga distinctio, quidem delectus veritatis
          reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur
          tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur
          suscipit veritatis nulla quos quia aspernatur perferendis, libero
          sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam,
          modi rem maiores.
        </div>
        <div className="full-post__para">
          Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo
          velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa
          vel nisi in dolorum consequatur, veritatis porro explicabo soluta
          commodi libero voluptatem similique id quidem? Blanditiis voluptates
          aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam
          harum excepturi ea.
        </div>
        <div className="full-post__para">
          Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam
          quidem, dolor distinctio similique asperiores voluptas enim,
          exercitationem ratione aut adipisci modi quod quibusdam iusto,
          voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur
          totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis.
          Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!
        </div>
        <div className="full-post__para">
          Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus
          at officia adipisci quasi nemo a perspiciatis provident magni
          laboriosam repudiandae iure iusto commodi debitis est blanditiis alias
          laborum sint dolore. Dolores, iure, reprehenderit. Error provident,
          pariatur cupiditate soluta doloremque aut ratione. Harum voluptates
          mollitia illo minus praesentium, rerum ipsa debitis, inventore?
        </div>
        <div className="full-post__tag">
          <ul>
            <li>
              <a href="/href">LIFE</a>
            </li>
            <li>
              <a href="/href">SPORT</a>
            </li>
            <li>
              <a href="/href">TECH</a>
            </li>
            <li>
              <a href="/href">TRAVEL</a>
            </li>
          </ul>
        </div>
        <div className="full-post__author">
          <div>
            <img src="images/person_1.jpg" alt="person_1.jpg" />
          </div>
          <div>
            <h3 className="full-post__author-name">George Washington</h3>
            <p className="full-post__author-introduce">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus
              itaque, autem necessitatibus voluptate quod mollitia delectus aut,
              sunt placeat nam vero culpa sapiente consectetur similique,
              inventore eos fugit cupiditate numquam!
            </p>
          </div>
        </div>
      </article>
    );
  }
}

Post.propTypes = {
  postDetail: PropTypes.object
};

export default Post;
