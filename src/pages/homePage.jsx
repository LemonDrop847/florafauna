import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Popup from "../components/popUp";
import SignIn from "../services/auth/signIn";
import SignUp from "../services/auth/signUp";
import { useState } from "react";
import PostFeed from "./postFeed";

const Home = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    return ( 
        <>
            <div style={{
                paddingTop:"30px"
            }}className="tiger">
                {/* <SignIn/>
                <SignUp/> */}
                <div className="container tcontent">
                    <h1>Appreciating the hidden beauty of nature</h1>
                    <p>Join us to explore the various attributes of natural environment. Let the world view nature through your lens and watch what others discover. </p>
                    <button class="bttn" id="explore">Explore</button>
                </div>
                <Link to='/CreatePost'>Create Posts</Link>
                <br/>
            </div>
            <PostFeed/>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <SignIn />
            </Popup>

        </>
        
     );
}
 
export default Home;
