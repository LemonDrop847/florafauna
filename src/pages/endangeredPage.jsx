import { useState, useEffect } from "react";
import { db } from "../services/firebase";
import { onSnapshot, collection, orderBy } from "firebase/firestore";
import Post from "../components/postView";
function EndangeredPage() {
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
        // Filter the posts that have isendgr = true
        const filteredPosts = newPosts.filter((post) => post.isendgr === true);
        setPosts(filteredPosts);
      }
    );
    return unsubscribe;
  }, []);

  return (
    <div className="row">
      {posts.map((post) => (
        <div className="col-3 postCard" key={post.id}>
          <Post post={post} />
        </div>
      ))}
    </div>
  );
}

export default EndangeredPage;
