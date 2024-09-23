import "../styles/Home.css"
import { useState, useEffect } from "react"
import EmailIcon from '@mui/icons-material/Email';
import LinkIcon from '@mui/icons-material/Link';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

export default function Home(){


  const text1 = "I am a computer Science student at the university of Exeter, currently doing my masters. I am passionate about creating and learning - have a look around to find out more!"; // Full text to type out
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate(); 
  
  useEffect(() => {
    const fetchAllPosts = async () => {
        try {
            const res = await axios.get("http://localhost:5000/posts/preview"); // Ensure this URL matches your Express route
            setPosts(res.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    fetchAllPosts();
  }, []);


  const loadcontent = (post) =>{
    console.log(post)
    window.location.href = post.link;
  }

  const handleclick = () => {
    navigate('/resume')
  }
  
  return <div className="container">

    <nav>
      <a href="/" className="logo">Darren<span style={{ color: 'red' }}>.</span></a> 

      <div className="nav-links">
        <a href="/Resume" id="mode">Mode</a> 
        <a href="/Projects" id="projects">Projects</a> 
        <a href="/Contact" id="contact">Contact</a>
        <div className="switch-modes">
          <button onClick={handleclick}>Resume</button>
        </div>        
      </div>

      <div className="dropdown">
          <button className="dropbtn">Menu</button>
          <div className="dropdown-content">
            <a href="/resume">Resume</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
          </div>
        </div>
    </nav>

    <main>
      <div className="about-section">
        <div id="greeting">
          Hi, I am Darren!
        </div>
        <div id="about-text">
          {text1}
        </div>
      </div>
    </main>

    
      <div className="image">
         <img src="/Head.png" alt="Memoji" /> 
      </div>

    <div className="content"> 

    {/* preview three projects and have arrow to click for more */}
    {posts.map((post) => (
      <div className="card" key={post._id} onClick={() => {loadcontent(post)}}> {/* Move the key here */}
        <div className="card-content">
          <h1 style={{fontSize: "4rem"}}>{post.title}</h1>
          <p>{post.description}</p>

          <div className="learnmore"> 
            <span style={{display:"flex", alignItems: "center"}}>learn more <OpenInNewIcon style={{marginLeft: "5px"}}></OpenInNewIcon></span>
          </div>
        </div>


        
      </div>

    ))}
     
      
    </div>

    <footer>
      <div id="email" style={{display:"flex", alignItems:"center"}}> 
        <EmailIcon style={{marginRight: "0.25rem"}}></EmailIcon> 
        email : <a href="" style={{ textDecoration: 'underline', color: 'teal' }}>gichurud02@gmail.com </a> 
        </div>

      <div id="plinks" style={{display:"flex", alignItems:"center"}}> 
        <LinkIcon style={{marginRight: "0.3rem"}}></LinkIcon>
        personal links: </div>
      <div > <a href="https://github.com/FeelingPeachy" style={{ textDecoration: 'underline', color: 'teal' }}>github</a>  |  <a href="https://www.linkedin.com/in/darrengitagama/" style={{ textDecoration: 'underline', color: 'teal' }}>LinkedIn</a>  |  <a href="https://leetcode.com/u/gitagamad02/"  style={{ textDecoration: 'underline', color: 'teal' }}>Leetcode</a> </div>
    </footer>
  </div>
}