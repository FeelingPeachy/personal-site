import "./styles/Home.css"
import { useState, useEffect } from "react"
import EmailIcon from '@mui/icons-material/Email';
import LinkIcon from '@mui/icons-material/Link';

export default function Home(){

  // add type writing effect
  const text1 = "I am a computer Science student at the university of Exeter, currently doing my masters. I am passionate about creating and learning - have a look around to find out more!"; // Full text to type out


  return <div className="container">

    <nav>
      <a href="/Home/" className="logo">Darren<span style={{ color: 'red' }}>.</span></a> 

      <div className="nav-links">
        <a href="/Resume/">Resume</a> 
        <a href="/Projects/">Projects</a> 
        <a href="/Contact/">Contact Me</a>

        <div className="switch-modes">
          <button>click</button>
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
      <div className="image">
         <img src="/Head.png" alt="Memoji" /> 
      </div>
    </main>


    <div className="content"> 

      <div className="card">
       
        <div className="card-content">
          <h1>Title</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
      </div>

      <div className="card">
      
        <div className="card-content">
        <h1>Title</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
      </div>

      

      <div className="card">
        <div className="card-content">
          <h1>Title</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        </div>
      </div>

      
      
    </div>

    <footer>
      <div id="email" style={{display:"flex", alignItems:"center"}}> 
        <EmailIcon style={{marginRight: "0.25rem"}}></EmailIcon> 
        email : <a href="" style={{ textDecoration: 'underline', color: 'teal' }}>gichurud02@gmail.com </a> 
        </div>

      <div id="plinks" style={{display:"flex", alignItems:"center"}}> 
        <LinkIcon style={{marginRight: "0.3rem"}}></LinkIcon>
        personal links: </div>
      <div > <a href="" style={{ textDecoration: 'underline', color: 'teal' }}>github</a>  |  <a href="" style={{ textDecoration: 'underline', color: 'teal' }}>LinkedIn</a>  |  <a href=""  style={{ textDecoration: 'underline', color: 'teal' }}>Leetcode</a> </div>
    </footer>
  </div>
}