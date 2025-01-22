import React, { useEffect } from "react";
import "./Contact.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div data-aos='fade-up' data-aos-duration='2000' id="contact" className="contact">
      <hr />
      <div className="contact-content">
        <div className="contact-text-animation">
          <h1 className="contact-first-text">I am open to Collaboration</h1>
        </div>
        <p>
          Thank you for your interest in getting in touch with me. I'm eager to
          explore new opportunities, receive feedback or suggestions,
          collaborate on projects, and expand my network. <br />
          For any specific inquiries or comments, please feel free to reach out
          to me{" "}
          <a href="mailto:iykesdesign111@gmail.com">
            <span className="contact-email">iykesdesign111@gmail.com</span>
          </a>
        </p>
      </div>
      <div className="contact-footer">
        <div className="contact-circle">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Contact;
