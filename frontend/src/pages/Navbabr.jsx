import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ContactFormm from './ContactForm';
import "../styles/navbar.css"
import { Link } from 'react-router-dom';

export default function Navbar(){

    const navigate = useNavigate(); 
    const [open, setOpen] = useState(false)
    const[screenMode, setScreenMode] = useState(true)

    const handleclick = () => {
        navigate('/resume')
      }

    const handleContact = (e) => {
        e.preventDefault();
        setOpen(true)
    }

    const handleChangeMode = () => {
        console.log("click")
        setScreenMode(false) 
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
                <img src='/Display.png' onClick={handleChangeMode}></img>
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
                    <img onClick={handleChangeMode} src='/Display.png'></img>
            </div>  
        </div>
   

        </nav>

        <ContactFormm isOpen={open} setFormState={setOpen} />
    </>
    }

