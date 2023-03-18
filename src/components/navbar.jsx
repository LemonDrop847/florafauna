import { Link } from "react-router-dom";
import SignIn from "../services/auth/signIn";
import {useState} from 'react';
import Popup from "./popUp";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [navbar,setNavbar]=useState(false);
    const navigate=useNavigate();
    const changeBackground=()=>{
        // console.log(window.scrollY);
        if(window.scrollY>=160){
            setNavbar(true);
        }else{
            setNavbar(false);
        }
    }
    window.addEventListener("scroll",changeBackground);
    return ( 
        <>
            <div className={navbar?'navbar1 active':'navbar1'}>
                <div className="row">
                    <div className="col">
                        <img style={{
                            height:"80px"
                        }} onClick={()=>navigate("/")} src="https://i.postimg.cc/282LYXmd/Flora-Fauna-removebg-preview-cropped.png" alt="" />
                    </div>
                    <div className="col" onClick={()=>setButtonPopup(true)}>
                        <img id="user"src="https://i.postimg.cc/pdHmrmct/user.png" alt="" />
                    </div>
                </div>
                <div className={navbar?"row active":"row"} style={{
                    padding:"10px 0 10px 0"
                }}>
                    <div className="col"><Link className="navs" to="/">Home</Link></div>
                    <div className="col"><Link className="navs" to="/about">About</Link></div>
                    <div className="col"><Link className="navs" to="/">Who's Hidden</Link></div>
                    <div className="col"><Link className="navs" to="/MyPosts">My Posts</Link></div>
                </div>
            </div>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <SignIn />
            </Popup>
        </>
     );
}
 
export default Navbar;