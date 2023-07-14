import React from 'react';
import '../componentcss/About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-section">
        <h2>Welcome to Silver Spoon Restaurant</h2>
        <p>
          At Silver Spoon, we are passionate about providing a delightful dining experience that combines exceptional cuisine with a warm and inviting atmosphere. Our team of talented chefs crafts each dish with precision, using the finest ingredients to create culinary masterpieces that tantalize the taste buds.
        </p>
        <p>
          Our menu features a diverse selection of dishes, inspired by both traditional and contemporary flavors. From mouthwatering appetizers to delectable main courses and heavenly desserts, every bite is a celebration of flavor and creativity.
        </p>
        <p>
          Whether you're joining us for a romantic dinner, a family celebration, or a business lunch, our friendly and attentive staff will ensure that your time at Silver Spoon is nothing short of extraordinary. We take pride in our commitment to exceptional service and strive to create a memorable dining experience for each and every guest.
        </p>
      </div>
      <div className="image-section">
        <img className="chef-image" src="https://th.bing.com/th/id/OIP.WfeAlkcZUY4ncfQy7PBLFQHaEK?pid=ImgDet&rs=1" alt="Chef"/>
        <img className="restaurant-image" src="https://th.bing.com/th/id/OIP.sMhHfhYOSD5l2ckObe1jBgHaEK?pid=ImgDet&rs=1" alt="Restaurant"/>
      </div>
    </div>
  );
};

export default About;
