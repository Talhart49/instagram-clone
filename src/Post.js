import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";

function Post({ imageURL, caption, username }) {
  return (
    <div className='post'>
      <div className='post__header'>
        <Avatar
          className='post__avatar'
          alt={username}
          src='https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/social/reactt-light_1200x628.png?sfvrsn=43eb5f2a_2'
        />
        <h3>{username}</h3>
      </div>

      <img className='post__image ' src={imageURL} alt='' />
      <p className='post__text'>
        <strong>{username}:</strong> {caption}
      </p>
    </div>
  );
}

export default Post;
