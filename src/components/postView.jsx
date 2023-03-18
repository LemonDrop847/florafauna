import React, { useState } from "react";
import Popup from "./popUp";
import PostDetails from "./postDetails";

function Post({ post }) {
  const [showDetails, setShowDetails] = useState(false);
  const [buttonPopup, setButtonPopup] = useState(false);

  const handlePostClick = () => {
    setShowDetails(true);
  };

  return (
    <div onClick={()=>setButtonPopup(true)}>
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
      
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        {/* {showDetails && ( */}
          <PostDetails post={post} onClose={() => setShowDetails(false)} />
        {/* )} */}
      </Popup>
      
    </div>
  );
}

export default Post;
