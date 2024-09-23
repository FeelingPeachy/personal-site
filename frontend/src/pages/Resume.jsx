import "../styles/Resume.css"
import { useState, useEffect } from "react"
import EmailIcon from '@mui/icons-material/Email';
import LinkIcon from '@mui/icons-material/Link';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import DownloadIcon from '@mui/icons-material/Download';

export default function Resume(){

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
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
    </nav>


    {/* <span style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>2024 - Present  <span id="arrow" style={{display: "flex", justifyContent:"center"}}><KeyboardArrowDownIcon></KeyboardArrowDownIcon> </span></span> */}
    <div className="resume-content">
      <div id="downloader">
        <a href="../public/Darren Gitagama word cv 2025 v2.pdf" download>
          <DownloadIcon></DownloadIcon>
        </a>
      </div>  
    
    <div className="wrapper">
        
        <div className="entry">

            <div className="h2-header">
                <h2>2024 - Present</h2> 
                <h2 id="arrow">I</h2>
            </div>
            
            
            <p>Solutions Architect Intern, <span style={{color: "red", fontWeight:"800"}}>HSBC</span></p>
            <ul>
                <li>Developed a visualization tool using Python and Flask to monitor the health of HSBC group data center network response times, using data sourced from IBM SevOne API.</li>
                <li>Collaborated to develop a "Net-zero at design framework," guiding solution design towards more carbon-conscious choices by considering the impact of different workloads and hosting profiles.</li>
                <li>Researched and documented data center connectivity patterns within core networks.</li>
                <li>Collaborated with senior colleagues to develop a superstack governance framework, enhancing visibility for stakeholders during horizon planning.</li>
                <li>Conducted a comprehensive comparative analysis of Digital Experience Monitoring solutions (DEM), informing the user experience monitoring strategy.</li>
            </ul>
        </div>

        <div className="entry">
            <div className="h2-header">
                    <h2>2023</h2> 
                    <h2 id="arrow">II</h2>
                </div>
                
            
            <p>Consumer Business Architect Intern <span style={{color: "red", fontWeight: "800"}}>Lloyds Banking Group</span></p>
            <ul>
                <li>Developed a Business Capability Model (BCM), modeling business unit dependencies and relationships, contributing to enhanced strategic planning and execution.</li>
                <li>Developed and refined service catalogues, analyzing alignment of IT services with business goals.</li>
            </ul>
        </div>

        <div className="entry">
            <div className="h2-header">
                    <h2>2022</h2> 
                    <h2 id="arrow">III</h2>
                </div>
            
            <p>Python Teacher, <span style={{color: "red", fontWeight: "800"}}>University of Exeter Entrepreneurship Society</span></p>
            <ul>
                <li>Led Python demonstrations and discussions, encouraging student engagement and participation in workshops.</li>
                <li>Responsible for the learning of 25 students, providing additional help where students were struggling, thereby improving student programming confidence and understanding, resulting in a pass rate of 87%.</li>
                <li>Handled administrative responsibilities such as communicating with associates, collecting, and organizing resources.</li>
            </ul>
        </div>

        <div className="entry">
            <div className="h2-header">
                    <h2>EXTRA CIRRICULARS</h2> 
                    <h2 id="arrow">IV</h2>
                </div>
            
            <p><span style={{color: "red", fontWeight: "800"}}>Certifications</span></p>
            <ul>
                <li>Guitar enthusiast</li>
                <li>AWS Cloud Practisioner Certified </li>
                <li>AWS Solution Architect Associate (working on it)</li>
                <li>Student Ambassodor @ Exeter</li>
                <li>Comp Sci Peer Mentor scheme</li>
            </ul>
        </div>

        <div className="entry">
            <div className="h2-header">
                    <h2>EDUCATION</h2> 
                    <h2 id="arrow">V</h2>
                </div>
            
            <p>MSci Computer Science<span style={{color: "red", fontWeight: "800"}}> University of Exeter </span> </p>
          
            <ul>
                <li><b>Modules:</b>Software Development, Database Theory and Design, Network and Computer Security, Enterprise Computing, Learning From Data,
                Computer Modelling and Simulations, Building Trustworth Systems, Functional programming, Nature inspired computation </li>
            </ul>
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
      <div > <a href="https://github.com/FeelingPeachy" style={{ textDecoration: 'underline', color: 'teal' }}>github</a>  |  <a href="https://www.linkedin.com/in/darrengitagama/" style={{ textDecoration: 'underline', color: 'teal' }}>LinkedIn</a>  |  <a href="https://leetcode.com/u/gitagamad02/"  style={{ textDecoration: 'underline', color: 'teal' }}>Leetcode</a> </div>
    </footer>
  </div>
}