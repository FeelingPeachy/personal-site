import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ContactFormm from './ContactForm';
import "../styles/navbar.css"
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/themecontext';

export default function Navbar(){

    const navigate = useNavigate(); 
    const [open, setOpen] = useState(false)
    const {screenMode, setScreenMode} = useTheme();

    const handleclick = () => {
        navigate('/resume')
      }

    const handleContact = (e) => {
        e.preventDefault();
        setOpen(true)
    }

    const handleChangeMode = () => {
        console.log("click")
        setScreenMode(!screenMode) 
        console.log(screenMode)
        //  somehow given change in state, change colour theme
    }

    return <>
    <nav>
        <a href="/" className="logo">Darren<span style={{ color: 'red' }}>.</span></a> 

        {/* normal nav links */}
        <div className="nav-links">
            
            <a href="/" id="contact" onClick={handleContact}>Contact</a>
            <div>
                <button onClick={handleclick}>Resume</button>
            </div>    

            {/* lightmode/darkmode */}
            <div className="mode">
                <img src={screenMode ? "/Display.png" : "/Display (1).png"} onClick={handleChangeMode}></img>
            </div>    
        </div>



        {/* drop down menu */}
        {/* need to fix the switch mode in the dropdown nav bar */}

        <div className="mini-nav-wrapper">

            <div className="dropdown">
                <button className="dropbtn">Menu</button>

                <div className="dropdown-content">
                    <Link to="/resume">Resume</Link>
                    <a href="https://github.com/FeelingPeachy">Projects</a>
                    <a onClick={handleContact}>Contact</a>
                </div> 

            </div>

            <div className="mode">
            <img src={screenMode ? "/Display.png" : "/Display (1).png"} onClick={handleChangeMode}></img>
            </div>  
        </div>
   

        </nav>

        <ContactFormm isOpen={open} setFormState={setOpen} />
    </>
    }

