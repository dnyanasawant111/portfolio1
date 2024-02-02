
"use client"
import React, { useEffect, useState } from 'react';
import '../Style/Contact.css';
import emailjs from "@emailjs/browser";


const Contact:React.FC = () => {

  const [state, setState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [mailSend, setMailSend] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMailSend(true)
    emailjs.sendForm(
      'service_9vindbs',
      'template_1ffa6mi',
      e.currentTarget,
      'BH73g5h7EQD57fH5C')
      .then((result) => {
        console.log(result.text);

      }, (error) => {
        console.log(error.text);
      });

  };


  return (
    <div className='main-contact pt-5 pb-5'
      data-aos="fade-up"
      data-aos-duration="1000">
      <div className="container">
        <h1>Contact</h1>
        <p>Get in touch with me</p>
        <div className="contact-form pt-2">
          {mailSend == false ? <form className="contact-form text-white" onSubmit={handleSubmit}>
            <label>
              Name:
              <input type="text" name="name" value={state.name} id="name" required onChange={handleChange} />
            </label>

            <label>
              Email:
              <input type="email" name="email" value={state.email} id="email" required onChange={handleChange} />
            </label>

            <label>
              Message:
              <textarea name="message" value={state.message} id="message" required onChange={handleChange} />
            </label>

            <button className='btn btn-info w-50' type="submit">Let's Connect</button>
          </form> : <div className="alert alert-primary p-4" role="alert">
            Thanks for connecting with Dnyaneshwar. I will connect with you shortly.
          </div>}
        </div>
      </div>
    </div>
  );
};

export default Contact;