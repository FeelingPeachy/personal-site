import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ContactFormm from './ContactForm';
import "../styles/Navbar.css"

export default function Navbar(){

    const navigate = useNavigate(); 
    const [open, setOpen] = useState(false)

    const handleclick = () => {
        navigate('/resume')
      }

    const handleContact = (e) => {
        e.preventDefault();
        setOpen(true)
    }


    return <>
    <nav>
        <a href="/" className="logo">Darren<span style={{ color: 'red' }}>.</span></a> 

        <div className="nav-links">
            
            <a href="/Contact" id="contact" onClick={handleContact}>Contact</a>
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

        <ContactFormm isOpen={open} setFormState={setOpen} />
    </>
    }

