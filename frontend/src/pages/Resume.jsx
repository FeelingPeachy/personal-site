import "../styles/Resume.css"
import DownloadIcon from '@mui/icons-material/Download';
import Footer from "./Footer";
import Navbar from "./Navbabr";
import { useTheme } from "../contexts/themecontext";

export default function Resume(){


  const {screenMode} = useTheme();
  return <div className={screenMode ? "container light" : "container dark"}>
    <Navbar></Navbar>

    {/* <span style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>2024 - Present  <span id="arrow" style={{display: "flex", justifyContent:"center"}}><KeyboardArrowDownIcon></KeyboardArrowDownIcon> </span></span> */}
    <div className="resume-content">
      {/* <div id="downloader">
        <a href="../public/Darren Gitagama word cv 2025 v2.pdf" download>
          <DownloadIcon></DownloadIcon>
        </a>
      </div>   */}



    {/* TODO: reveal content once clicked instead of onhover */}
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
                    <h2>EXTRAS+</h2> 
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

    <Footer></Footer>
  </div>
}


// 1E5AD2
// B454C1