
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


export const ContactUs = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_8d2rk4r', 'template_geaus0p', form.current, '1NBn6J1S_EkqY_Qr8')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
      <form ref={form} onSubmit={sendEmail}>
        <div className=' container-fluid p-5  shadow-lg'>
           <div className='container justify-content-center p-3 mb-5 text-align-center" aria-hidden="true"></i>'>
                <input className='form-control p-3 mb-5' placeholder='NAME' required type="text" name="user_name" />
                <input className='form-control p-3 mb-5' placeholder='ENTER YOUR MAIL-ID' required type="email" name="user_email" />
                <textarea className="form-control p-3 mb-5" placeholder='MESSAGE' required rows="5" name="message" />
                <input className="btn btn-primary" type="submit" value="Send" />

           </div>
        </div>
      </form>
    );
  };

