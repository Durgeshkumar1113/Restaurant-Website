import React, { useState } from 'react';
import '../componentcss/Contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false); // Track if the form is submitted

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', name, email, message);
    setSubmitted(true); // Set submitted state to true
  };

  return (
    <>
      <div className='contactmainbox'>
        <div className='contactmainbox2'>
          <div className="contact-container">
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
        <div className="mapouter">
          <h1>Restaurant Location</h1>
          <div className="gmap_canvas">
            <iframe
              className="gmap_iframe"
              width="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=250&amp;height=250&amp;hl=en&amp;q=OYO%20Royal%20Guest%20House%20Jandiala%20-%20Phagwara%20Rd,%20Satnampura,%20Phagwara,%20Punjab%20144401&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Display success message if the form is submitted */}
      {submitted && (
        <div className="success-message">
          <p>Form submitted successfully!</p>
        </div>
      )}
    </>
  );
};

export default Contact;
