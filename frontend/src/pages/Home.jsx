import "../styles/Home.css"
import { useState, useEffect } from "react"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Footer from "./Footer";
import Navbar from "./Navbabr";

export default function Home(){

  const [posts, setPosts] = useState([]);
  const [text, setText] = useState('');
  const text1 = "I am a computer Science student at the university of Exeter, currently doing my masters. I am passionate about creating and learning - have a look around to find out more!";

  // Fetching posts
  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const res = await fetch("http://localhost:5000/posts/preview", {
            method: "GET"
        });
        const data = await res.json(); 
        setPosts(data); 

      } catch (error) {
          console.error('Error fetching posts', error);
      }
    };

    fetchAllPosts();
  }, []);

    
  // typewrite recursive effect
    useEffect(() => {

      let index = 0;
      const speed = 50;
      let timeoutId;

      // timeout id is v important. ie if we rerender before function has completed execution we can run into unewanted states
      // time out provd cleanup properly reset

      const typeWriter = () => {
        if (index < text1.length) {
          setText((prevText) => prevText + text1.charAt(index));
          index++;
          timeoutId = setTimeout(typeWriter, speed); // wait speed time before rexecuting the function
        }
      };

      typeWriter();
      return () => {
        clearTimeout(timeoutId); 
      };
    }, []); 

  const loadcontent = (post) =>{
    console.log(post)
    window.location.href = post.link; // route to external web page
  }
  
  return <div className="container">
    <Navbar></Navbar>
    
    <main>
      <div className="about-section">
        <div id="greeting">
          Hi, I am Darren!
        </div>
        <div id="about-text">
          {text}
        </div>
      </div>
    </main>
    
      <div className="image">
         <img src="/Head.png" alt="Memoji" /> 
      </div>

    <div className="content"> 

    {/* preview three projects */}
    {posts.map((post) => (
      <div className="card" key={post._id} onClick={() => {loadcontent(post)}}> 
        <div className="card-content">
          <h1 style={{fontSize: "3rem"}}>{post.title}</h1>
          <p>{post.description}</p>

        </div>
          <div className="learnmore"> 
              <span style={{display:"flex", alignItems: "center"}}>learn more <OpenInNewIcon style={{marginLeft: "5px"}}></OpenInNewIcon></span>
            </div>    
      </div>
      
    ))}
    </div>

    <Footer></Footer>
  </div>
}