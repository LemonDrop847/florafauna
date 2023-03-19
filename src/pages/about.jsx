import './about.css'

const About = () => {
    return ( 
        <>
        <div className="main">
            <h1 style={{color:"rgb(23, 91, 23)"}}>Why <span style={{color:"rgb(60, 173, 60)"}}>Flora</span>Fauna?</h1>
            <p className="descr"> FloraFauna is a web development project which aims to create  <span className='highlight'>  awareness  </span> amongst people to appreciate the <span className='highlight'>  mother nature  </span> for all the beauty it brings to us. People can show the world,what nature means through their lens. Here you can share your experience of visiting any  <span className='highlight'>natural ecosystem</span> and what attracted you the most their. Tell us the  <span className='highlight'>secrets of nature</span> that you have uncovered.</p>

        </div>
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
        </>        
     );
}
 
export default About;