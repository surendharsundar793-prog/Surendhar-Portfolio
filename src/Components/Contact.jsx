import React, { useState } from 'react'
import '../assets/Styles/contact.css'
import { toast } from 'react-toastify';
import AnimatedContent from './AnimatedContent';
import { Send, Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const email = formData.get("email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Invalid email format");
      return;
    }

    setIsSubmitting(true);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      if (response.ok) {
        toast.success("Message sent successfully!");
        event.target.reset();
      } else {
        toast.error("Server unreachable, try again later");
      }
    } catch (error) {
      toast.error("Network interface error");
    }
    
    setIsSubmitting(false);
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        
        <div className="contact-content-grid">
          
          {/* Left Column: Minimal Details */}
          <AnimatedContent 
            distance={40} 
            direction="horizontal" 
            reverse 
            duration={1} 
            threshold={0.1} 
            once 
            className="contact-details-column"
          >
            <span className="contact-subtitle">GET IN TOUCH</span>
            <h3 className="contact-main-title">Let's build something together.</h3>
            <p className="contact-description">
              Have a project, a job opportunity, or just want to chat? Drop a message here, or reach out directly through my social channels.
            </p>

            <div className="contact-channels">
              <a href="mailto:surendharsunadr793@gmail.com" className="channel-item cursor-target">
                <Mail size={18} className="channel-icon" />
                <span className="channel-value">surendharsunadr793@gmail.com</span>
              </a>
            </div>

            <div className="contact-availability">
              <span className="status-pulse-dot"></span>
              <span className="status-text">Available for new opportunities</span>
            </div>
          </AnimatedContent>

          {/* Right Column: Clean Minimal Form */}
          <AnimatedContent 
            distance={40} 
            direction="horizontal" 
            duration={1} 
            delay={0.1} 
            threshold={0.1} 
            once 
            className="contact-form-column"
          >
            <form className="minimal-contact-form" onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <div className="input-group">
                  <input type="text" name="name" placeholder="Name" required />
                  <span className="focus-line"></span>
                </div>
                
                <div className="input-group">
                  <input type="email" name="email" placeholder="Email" required />
                  <span className="focus-line"></span>
                </div>
              </div>
              
              <div className="input-group">
                <textarea name="message" rows="4" placeholder="Your Message" required></textarea>
                <span className="focus-line"></span>
              </div>
              
              <button type="submit" className="minimal-submit-btn cursor-target" disabled={isSubmitting}>
                {isSubmitting ? (
                  <span>SENDING...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={14} className="send-arrow-icon" />
                  </>
                )}
              </button>
            </form>
          </AnimatedContent>

        </div>
      </div>
    </section>
  )
}

export default Contact
