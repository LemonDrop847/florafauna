// import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import Popup from "../components/popUp";
import SignIn from "../services/auth/signIn";
// import SignUp from "../services/auth/signUp";
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
                <div className="container tcontent">
                    <h1>Appreciating the hidden beauty of nature</h1>
                    <p>Join us to explore the various attributes of natural environment. Let the world view nature through your lens and watch what others discover. </p>
                    <button class="bttn" id="explore">Explore</button>
                </div>
                <br/>
            </div>
            <div className="row">
                <div className="col">
                    <h1 style={{margin:"1rem",color:"#005914"}}>See what's new!</h1>
                    <img id="add-icon" onClick={()=>setButtonPopup1(true)} src="https://i.postimg.cc/zvqxwwzS/icons8-add-new-100.png" alt="" />
                    <h3 style={{float:"right",marginTop:"20px",color:"#005914"}}>Add Post Here</h3>
                </div>
            </div>

            <PostFeed/>
            <div class="mission">
                <h1 style={{color:"#FFFFFF"}}>Our <span style={{color:"rgb(60, 173, 60)"}}>mission</span></h1>
                <p style={{color:"#FFFFFF"}}>We aim to spread awareness to protect <em> all species</em> of the ecosystem</p>
            </div>

            <div className="row">
                <div className="col">

                <img src='https://i.postimg.cc/XJKLVR2H/Png-Item-279070.png' alt="" style={{height:"80px"}}></img>
                </div>
                <div className="col">

                <p><strong><span style={{color:"rgb(60, 173, 60)"}}>FloraFauna</span></strong> targets the following Sustainability Development Goals</p>
                </div>
                <div className='col sdg'>
                    <img src='https://i.postimg.cc/LXh4RS6R/E-PRINT-14.jpg' alt="" style={{height:"100px"}}/>
                    <img src='https://i.postimg.cc/mrKZbqcH/E-PRINT-15.jpg' alt="" style={{height:"100px"}}/>
                </div>
            </div>
            <Popup trigger={buttonPopup1} setTrigger={setButtonPopup1}>
                <CreatePost/>
            </Popup>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <SignIn />
            </Popup>

        </>
        
     );
}
 
export default Home;
