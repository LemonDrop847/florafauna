import { Link } from "react-router-dom";
import {useState} from 'react';
const Navbar = () => {
    const [navbar,setNavbar]=useState(false);

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
        // <nav className="navbar">
            <div className={navbar?'navbar1 active':'navbar1'}>
                <div className="row">
                    <div className="col">
                        <img style={{
                            height:"127px"
                        }} src="https://i.postimg.cc/282LYXmd/Flora-Fauna-removebg-preview-cropped.png" alt="" />
                    </div>
                </div>
                <div className="row" style={{
                    marginTop:"10px"
                }}>
                    <div className="col"><Link className="navs" to="/">Home</Link></div>
                    <div className="col"><Link className="navs" to="/about">About</Link></div>
                    <div className="col"><Link className="navs" to="/">Who's Hidden</Link></div>
                    <div className="col"><Link className="navs" to="/MyPosts">My Posts</Link></div>
                </div>
            </div>
        // </nav> 
     );
}
 
export default Navbar;