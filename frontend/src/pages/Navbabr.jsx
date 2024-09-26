import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ContactFormm from './ContactForm';
import "../styles/navbar.css"
import { Link } from 'react-router-dom';

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
            
            <a href="/" id="contact" onClick={handleContact}>Contact</a>
            <div className="switch-modes">
            <button onClick={handleclick}>Resume</button>
            </div>        
        </div>

        <div className="dropdown">
            <button className="dropbtn">Menu</button>
            <div className="dropdown-content">
                <Link to="/resume">Resume</Link>
                <a href="https://github.com/FeelingPeachy">Projects</a>
                <a onClick={handleContact}>Contact</a>
            </div>
            </div>
        </nav>

        <ContactFormm isOpen={open} setFormState={setOpen} />
    </>
    }

