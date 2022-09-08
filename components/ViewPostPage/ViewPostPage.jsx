import NextLink from 'next/link';
import React, { useState, useEffect } from 'react';
import styles from './ViewPostPage.module.css';
import PostLinksMenu from './PostLinksMenu/PostLinksMenu';
import PostContentBody from './PostContentBody/PostContentBody';
// import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../Layout/Spinner';
// import { getPostsByCar } from '../../api/post';

//const ViewPostPage = ({ getPostsByCar, post: { posts, loading }, match }) => {
const ViewPostPage = ({ match }) => {
  const [currentPost, setCurrentPost] = useState('');
  const [postLinks, setPostLinks] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     setPostLinks(await getPostsByCar(match.params.car));
  //   };    
  //   fetchData();
  // }, []);

  const handleSelectChange = (e) => {
    //setCurrentPost(e.target.value);
  };

  return postLinks === null || postLinks === undefined ? (
    <Spinner />
  ) : (
    <>
    {postLinks.length > 0 && (
      <div className={styles.vppContainer}>
          <div className={styles.vppPaneLeft}>
            <h1>{match.params.car}</h1>
            <hr className={styles.dropdownDivider}/>
            <h5>RECENT POSTS</h5>
            <div className={styles.threadPostLinks}>
              <ul>
                {/* {postLinks.map((post) => (
                  <PostLinksMenu
                    key={post._id}
                    slug={post.slug}
                    heading={post.heading}
                    car={match.params.car}
                  />
                ))} */}
              </ul>
            </div>
          </div>
          <div className={styles.vppPaneLeftMobile}>
            <h1>{match.params.car}</h1>
            <hr className={styles.dropdownDivider}/>
            <h5>RECENT POSTS</h5>
            <div className={styles.threadPostLinks}>
              {currentPost && (
                <NextLink to={`/viewpost/${match.params.car}/${currentPost}`} />
              )}
              <select className={styles.vppSelect} defaultValue='' onChange={(e) => handleSelectChange(e)}>
                {/* {postLinks.map((post) => {
                  if (postLinks[0]._id === post._id)
                    return (<option key={post._id} value={post.slug}>{post.heading}</option>)
                  return <option key={post._id} value={post.slug}>{post.heading}</option>
                })} */}
              </select>
            </div>
          </div>
          <div className={styles.vppPaneRight}>
            <PostContentBody id={match.params.id} />
          </div>
      </div>
    )}
    </>
  )
};

// ViewPostPage.propTypes = {
//   getPostsByCar: PropTypes.func.isRequired,
//   post: PropTypes.object.isRequired
// };

export default ViewPostPage;

// const mapStateToProps = (state) => ({
//   post: state.post
// });

// export default connect(mapStateToProps, { getPostsByCar })(ViewPostPage);