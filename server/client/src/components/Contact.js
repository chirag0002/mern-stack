import React, {useEffect, useState} from 'react';
import '../style/Contact.css';

const Contact = () => {

  const [userData, setUserData] = useState({});

  const contactPage = async () => {
      try {
          const res = await fetch('/contacts', {
            method: "GET",
            headers:{
              "Content-Type": 'application/json',
               Accept: 'application/json'
            }
          });
          const data = await res.json();
          console.log(data);
          setUserData(data);

          if(!res.status === 200) {
            const error = new Error(res.error);
            throw error;
          }

      } catch (err) {
          console.error(err);
      }
  }

  useEffect(() => {
    contactPage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return <div>
    <div className="contact-info mt-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">

            <div className="contact-info-item d-flex justify-content-start">
              <i className="zmdi zmdi-phone zmdi-hc-2x contact-info-img text-blue"></i>
              <div className="contact-info-content">
                <div className="contact-info-title">
                  Phone
                </div>
                <div className="contact-info-text">
                  +91 1111 543 2198
                </div>
              </div>
            </div>

            <div className="contact-info-item d-flex justify-content-start">
               <i className="zmdi zmdi-email zmdi-hc-2x contact-info-img text-blue"></i>
              <div className="contact-info-content">
                <div className="contact-info-title">
                  Email
                </div>
                <div className="contact-info-text">
                  Varshneychirag34@gmail.com
                </div>
              </div>
            </div>

            <div className="contact-info-item d-flex justify-content-start">
              <i className="zmdi zmdi-home zmdi-hc-2x contact-info-img text-blue"></i>
              <div className="contact-info-content">
                <div className="contact-info-title">
                 Address
                </div>
                <div className="contact-info-text">
                  Uttar Pradesh
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="contact-form">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="contact-form-container py-5">
              <div className="contact-form-title">
                Get in Touch
              </div>
              <form method="GET" id="contact-form">
                <div className="contact-form-name d-flex justify-content-between align-content-between">
                  <input className="contact-form-name input-field"  type="text" id="contact-form-name" value={userData.name} placeholder="Your Name" required="true" />
                  <input className="contact-form-email input-field"  type="email" id="contact-form-email" placeholder="Your Email" value={userData.email} required="true" />
                  <input className="contact-form-phone input-field"  type="number" id="contact-form-phone" placeholder="Your Phone" value={userData.phone}required="true" />
                </div>
                <div className="contact-form-text mt-4">
                  <textarea className="contact-form-message text-field" placeholder="Message" cols="97" rows="3"></textarea>
                </div>
                <div className="contact-form-button">
                  <button type="submit" className="button contact-submit-button">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>

    
  </div>;
};

export default Contact;
