import React, { useState } from "react";
import PostDetails from "./postDetails";
import Popup from "./popUp";

function Post({ post }) {
  const [showDetails, setShowDetails] = useState(false);

  const handlePostClick = () => {
    setShowDetails(true);
  };

  return (
    <div onClick={handlePostClick}>
      {post.images && post.images.length > 0 && (
        <img
          src={post.images[0]}
          alt="Post"
          style={{ maxWidth: "100%", maxHeight: "300px" }}
        />
      )}
      <h2>{post.name}</h2>
      <p>{post.location}</p>
      <p>By {post.username}</p>
      
      {showDetails && (
        <PostDetails post={post} onClose={() => setShowDetails(false)} />
      )}
    </div>
  );
}

export default Post;
