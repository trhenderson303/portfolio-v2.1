import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import "../styles/connect.css";

export const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_evqpigb', 'template_z3073xs', form.current, '7tm0savMvW6JwmXzm')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="form-box"> 
    <form ref={form} onSubmit={sendEmail}>
        <div className="form-item"> <label> Name </label> <input type="text" name="user_name" className="input-field" /> </div>
        <div className="form-item"> <label> Email </label> <input type="email" name="user_email" className="input-field"/> </div>
        <div className='form-message'> <label> Message </label> <textarea name="message" className="message-field" /> </div>
      
        <input
          type="submit" value="Send"
          className="submit-btn" />
    </form>
    </div>

  );
};