import React, { useState } from "react";
import Popup from "./popUp";
import PostDetails from "./postDetails";

function Post({ post }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      {post.images && post.images.length > 0 && (
        <img
          src={post.images[0]}
          alt="Post"
          style={{ maxWidth: "100%", maxHeight: "300px" }}
          onClick={() => {
            setShowDetails(true);
          }}
        />
      )}
      <h2>{post.name}</h2>
      <p>{post.location}</p>
      <p>By {post.username}</p>

      <Popup trigger={showDetails} setTrigger={setShowDetails}>
        {/* <SignIn/> */}
        <PostDetails post={post} />
      </Popup>
    </div>
  );
}

export default Post;
