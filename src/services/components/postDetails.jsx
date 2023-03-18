import React from "react";
import { Carousel } from "react-bootstrap";

function PostDetails({ post, onClose }) {
  return (
    <div>
      <button onClick={onClose}>Close</button>
      <Carousel>
        {post.images &&
          post.images.map((image, index) => (
            <Carousel.Item key={index}>
              <img src={image} alt={`No: ${index}`} className="d-block w-100" />
            </Carousel.Item>
          ))}
      </Carousel>
      <div>
        <h2>{post.name}</h2>
        <p>{post.location}</p>
        <p>By {post.user.username}</p>
        <p>{post.description}</p>
      </div>
    </div>
  );
}

export default PostDetails;
