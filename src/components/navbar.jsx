import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SignIn from "../services/auth/signIn";
import { auth } from "../services/firebase";
import { signOut } from "firebase/auth";
import Popup from "./popUp";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
const Navbar = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const changeBackground = () => {
    if (window.scrollY >= 160) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
        window.location.reload(true);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  window.addEventListener("scroll", changeBackground);
  return (
    <div className="container-fluid">
      <div className={navbar ? "navbar1 active" : "navbar1"}>
        <div className="row">
          <div className="col">
            <img
              style={{
                height: "80px",
              }}
              onClick={() => navigate("/")}
              src="https://i.postimg.cc/282LYXmd/Flora-Fauna-removebg-preview-cropped.png"
              alt=""
            />
          </div>
          <div className="col">
            {user && (
              <img id="user" src={user.photoURL} alt="" onClick={signOutUser} />
            )}
            {!user && (
              <Button style={{marginTop:"10px"}} className="btn btn-success" onClick={() => setButtonPopup(true)}>SignIn</Button>
            )}
          </div>
        </div>
        <div
          className={navbar ? "row active" : "row"}
          style={{
            padding: "10px 0 10px 0",
          }}
        >
          <div className="col">
            <Link className="navs" to="/">
              Home
            </Link>
          </div>
          <div className="col">
            <Link className="navs" to="/about">
              About
            </Link>
          </div>
          <div className="col">
            <Link className="navs" to="/endangered">
              Who's Hidden
            </Link>
          </div>
          <div className="col">
            <Link className="navs" to="/MyPosts">
              My Posts
            </Link>
          </div>
        </div>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <SignIn />
      </Popup>
    </div>
  );
};

export default Navbar;
