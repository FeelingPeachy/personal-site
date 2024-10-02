
import "../styles/form.css"
import axios from 'axios';

export default function ContactFormm({ isOpen, setFormState }) {
    if (!isOpen) return null;

    const handleClose = () => {
        setFormState(false); // Close the form
    };

    // TODO ADAPT TO WORK ON THE CONTACT TABLE
    const handleSubmit = async (e) => {
        e.preventDefault(); 
        const formData = new FormData(e.target); 
        const data = Object.fromEntries(formData.entries());
        
        console.log(data)
    
        try {
            const response = await fetch('https://46qq1kyv3a.execute-api.eu-west-2.amazonaws.com/dev/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: data.name,
                    email: data.email,
                    message: data.message
                })
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const resData = await response.json();
            console.log(resData);
            handleClose()

        } catch (error) {
            console.error("Error submitting the form:", error);
        }
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

                    <div className="button-container">
                    <button type="submit">Submit</button>
                    <button type="button" onClick={handleClose}>Close</button>
                </div>
                    
                </form>
                
            </div>
        </div>
    );
}