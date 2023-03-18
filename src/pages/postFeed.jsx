import { useState, useEffect } from "react";
import { db } from "../services/firebase";
import { onSnapshot, collection, orderBy } from "firebase/firestore";
import Post from "../components/postView";
function PostFeed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "posts"),
      orderBy("timestamp", "desc"),
      (snapshot) => {
        const newPosts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(newPosts);
      }
    );
    return unsubscribe;
  }, []);

  return (
    <div className='row'>
      {posts.map((post) => (
        <div className="col postCard">

        <Post key={post.id} post={post} />
        </div>
      ))}
    </div>
  );
}

export default PostFeed;
