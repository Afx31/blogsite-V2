import React, { useState, useEffect } from 'react';
import './HomePage.module.css';
// import { getPostBio } from '../../api/post';
// import CardDisplay from './CardDisplay/CardDisplay';

const HomePage = () => {
  const [post, setPost] = useState([]);
  
  // useEffect(() => {
  //   async function fetchData() {
  //     setPost(await getPostBio());
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className='home-container'>
      <div className='home-inner-container'>
        <h1>Latest Posts</h1>
        <div className='home-card-container'>
          {/* {post.map((post) => (
            <CardDisplay
              key={post._id}
              id={post.slug}
              car={post.car}
              thumbnail={post.thumbnail}
              heading={post.heading}
              description={post.description}
            />
          ))} */}
        </div>
      </div>
    </div>
  )
};

export default HomePage;