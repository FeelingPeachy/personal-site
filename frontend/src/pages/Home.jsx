import "../styles/Home.css"
import { useState, useEffect } from "react"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Footer from "./Footer";
import Navbar from "./Navbabr";

export default function Home(){

  const [posts, setPosts] = useState([]);
  const [text, setText] = useState('');
  const text1 = "Hii, I am Darren!"

  // Fetching posts
  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
          const res = await fetch("https://46qq1kyv3a.execute-api.eu-west-2.amazonaws.com/dev/post", {
              method: "GET"
          });

          const data = await res.json(); 
          setPosts(data); 
          console.log(data)
         
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
          {text}
        </div>
        <div id="about-text">
          I am a computer Science student at the university of Exeter, currently doing my masters.
          I am passionate about creating and learning - have a look around to find out more! Here are some of my interests and skills:
          
         </div>
        <div id="all-interest">
          <span className="interest"> Music Production </span>  <span className="interest">  Java </span> <span className="interest"> Guitar </span>
          <span className="interest">  Python </span>  <span className="interest">  Machine Learning </span>  <span className="interest">  Javascript </span> 
          <span className="interest">  AWS </span>  <span className="interest">  CSS </span> <span className="interest">  Art </span> <span className="interest">  Badminton </span>  
          </div>
      </div>
    </main>
    
    <div className="image">
        <img src="/Head.png" alt="Memoji" /> 
    </div>

    <div className="content"> 

    {/* preview three projects */}
    {posts.map((post) => (
      <>
        <div className="card" key={post.projectid} onClick={() => {loadcontent(post)}}> 
          <div className="card-content">
            <h1 style={{fontSize: "3rem"}}>{post.title}</h1>
            <p style={{margin: "1rem"}}>{post.content}</p>

          </div>  
          <div className="learnmore"> 
          <span style={{display:"flex", alignItems: "center"}}>learn more <OpenInNewIcon style={{marginLeft: "5px"}}></OpenInNewIcon></span>
        </div> 
        </div>
        
      </>
    ))}
    </div>

    <Footer></Footer>
  </div>
}