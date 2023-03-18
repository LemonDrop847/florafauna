import { useState, useEffect } from "react";
import { db } from "../services/firebase";
import { onSnapshot, collection, orderBy } from "firebase/firestore";
import Post from "../services/components/postView";
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
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostFeed;
