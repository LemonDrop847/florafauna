import Popup from "../components/popUp";
import SignIn from "../services/auth/signIn";
import { useState } from "react";
import PostFeed from "./postFeed";
import CreatePost from "./createPost";

const Home = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [buttonPopup1, setButtonPopup1] = useState(false);
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
                {/* <Link to='/CreatePost'>Create Posts</Link> */}
                <br/>
            </div>
            <div className="row">
                <div className="col">
                    <img id="add-icon" onClick={()=>setButtonPopup1(true)} src="https://i.postimg.cc/zvqxwwzS/icons8-add-new-100.png" alt="" />
                    <h3 style={{float:"right",marginTop:"20px"}}>Add Post Here</h3>
                    {/* <CreatePost/> */}
                </div>
            </div>
            <Popup trigger={buttonPopup1} setTrigger={setButtonPopup1}>
                <CreatePost/>
            </Popup>
            <PostFeed/>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <SignIn />
            </Popup>

        </>
        
     );
}
 
export default Home;
