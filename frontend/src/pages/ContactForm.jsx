import { useNavigate } from 'react-router-dom';
import "../styles/form.css"
export default function ContactFormm({ isOpen, setFormState }) {
    if (!isOpen) return null;

    const handleClose = () => {
        setFormState(false); // Close the form
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted");
        handleClose(); // closeform after has been submitted
    };

    return (
        <div className='window-overlay'>
            <div className='formpop'>
                <form onSubmit={handleSubmit}>
                    <div className="popup-form">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="popup-form">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="popup-form">
                        <label>Message:</label>
                        <textarea id="message" name="message" required />
                    </div>
                    
                </form>
                <div className="button-container">
                    <button type="submit">Submit</button>
                    <button type="button" onClick={handleClose}>Close</button>
                </div>
            </div>
        </div>
    );
}