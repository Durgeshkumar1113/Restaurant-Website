import React, { useState } from 'react';
import '../componentcss/Feedback.css';

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false); // New state variable

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', name, email, feedback, rating);
    setSubmitted(true); // Update the submission status
  };

  return (
    <div className='feedbackmainbox'>
      <div className='feedbackmainbox2'>
        <div className="feedback-form-container">
          <h2>Feedback Form</h2>
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
              <label htmlFor="feedback">Feedback:</label>
              <textarea
                id="feedback"
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="rating">Rating:</label>
              <select
                id="rating"
                value={rating}
                onChange={(e) => setRating(parseInt(e.target.value))}
                required
              >
                <option value={0}>Select rating</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>
            <button type="submit">Submit</button>
            <div className='message'>
            {submitted && <p>Form submitted successfully!</p>}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
