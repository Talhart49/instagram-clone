import React, { useState } from "react";

import "./App.css";
import Post from "./Post";

function App() {
  const [posts, setPost] = useState([
    {
      imageURL:
        "https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/social/reactt-light_1200x628.png?sfvrsn=43eb5f2a_2",
      username: "ranatalha",
      caption: " It is working",
    },
    {
      imageURL:
        "https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/social/reactt-light_1200x628.png?sfvrsn=43eb5f2a_2",
      username: "ranatalha",
      caption: " It is working",
    },
  ]);

  return (
    <div className='app'>
      <div className='app__header'>
        <img
          className='app__headerImage'
          src='https://logos-world.net/wp-content/uploads/2020/04/Instagram-Logo.png'
          alt=''
        />
      </div>

      {posts.map((post) => (
        <Post
          username={post.username}
          caption={post.caption}
          imageURL={post.imageURL}
        />
      ))}
    </div>
  );
}

export default App;
