import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../services/firebase";
import Post from "../components/postView";
import "./myPost.css";
import withAuth from "../services/auth/authCheck";

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
        const fetchedPosts = [];
        for (const postId of postIds) {
          const postDocRef = doc(db, "posts", postId);
          const postDoc = await getDoc(postDocRef);
          if (postDoc.exists()) {
            const post = { id: postDoc.id, ...postDoc.data() };
            fetchedPosts.push(post);
          }
        }
        setPosts(fetchedPosts);
      } else {
        setPosts([]);
      }
    };
    fetchPosts();
  }, [postIds]);

  return (
    <div className="myPosts">
      <div className="row" style={{paddingTop:"5rem"}}>

      {posts.map((post) => (
        <div className="col-3 postCard">

        <Post key={post.id} post={post} />
        </div>
      ))}
      </div>
    </div>
  );
}

export default withAuth(MyPosts);
