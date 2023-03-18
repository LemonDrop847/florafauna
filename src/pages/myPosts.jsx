import { useEffect, useState } from "react";
import {
  collection,
  query,
  getDocs,
  orderBy,
  doc,
  getDoc,
} from "firebase/firestore";
import { auth, db } from "../services/firebase";
import Post from "../services/components/postView";

function MyPosts() {
  const [postIds, setPostIds] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPostIds = async () => {
      const userDocRef = doc(db, "users", auth.currentUser.uid);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        
        const userData = userDoc.data();
        if (userData.posts) {
          setPostIds(userData.posts);
        }
      }
    };
    fetchPostIds();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      if (postIds.length > 0) {
        const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(q);
        const fetchedPosts = [];
        querySnapshot.forEach((doc) => {
          fetchedPosts.push({ id: doc.id, ...doc.data() });
        });
        setPosts(fetchedPosts);
      } else {
        setPosts([]);
      }
    };
    fetchPosts();
  }, [postIds]);

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default MyPosts;
