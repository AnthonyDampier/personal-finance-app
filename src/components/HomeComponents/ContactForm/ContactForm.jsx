import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
    // State for form fields
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    // Handle change in form inputs
    const handleChange = (e) => {
        const { name, value } = e.target; // Destructuring name and value from event target
        setFormData(prevState => ({
            ...prevState,
            [name]: value, // Dynamically setting state based on input name
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Preventing default form submission behavior
        if (formData.name === '' || formData.email === '' || formData.message === '') {
            console.log('Please fill out all fields');
            alert('Please fill out all fields to submit the form.'); 
        } else {
            
            console.log(formData);
            //send formData to a backend server or API endpoint
            alert('Form submitted. Check the console for form data.');
            setFormData({ name: '', email: '', message: '' }); // reset form fields after submission
        }
    };

    return (
        <form onSubmit={handleSubmit} className='contact-form'>
            <h2>Contact Us</h2>
            <div>
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                />
            </div>
            <button type="submit" className='submit-btn'>Submit</button>
        </form>
    );
};

export default ContactForm;
