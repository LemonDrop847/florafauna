import { Link } from "react-router-dom";
import SignIn from "../services/auth/signIn";
import SignUp from "../services/auth/signUp";

const Home = () => {
  return (
    <div>
      <h1>Hello</h1>
      <p>This is flora Fauna</p>
      <SignUp />
      <SignIn />

      <Link to="/CreatePost">Post Page</Link>
    </div>
  );
};

export default Home;
