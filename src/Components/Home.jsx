import React from 'react'
import '../assets/Styles/home.css'
import resume from '../assets/surendhar-resume.pdf'
import profile from '../assets/profile.jpeg'
import { motion } from 'framer-motion'
import { Download, Send } from 'lucide-react'

const Home = () => {
  const handleRedirect = (e, type, url) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('trigger-redirect', { 
      detail: { type, url } 
    }));
  };

  return (
    <div className="home-terminal-section">
      <div className="home-terminal-container">
        
        <div className="hero-shell">
          <div className="terminal-window hero-window">
            <div className="window-topbar">
              <div className="window-controls"></div>
              <div className="window-title">bash — terminal_hero</div>
            </div>
            <div className="window-content hero-content-shell" data-lenis-prevent>
               <div className="shell-lines">
                  <div className="shell-cmd terminal-line-1">› INTRO</div>
                  <div className="shell-output terminal-line-2">NAME: Surendhar S</div>
                  <div className="shell-output terminal-line-3">LOC:  Salem, India</div>
                  <div className="shell-cmd terminal-line-4">› What I Do</div>
                  <div className="shell-output terminal-line-5">
                    Building clean, efficient applications with a focus on performance and architectural excellence.
                  </div>
                  <div className="shell-cursor terminal-line-6">
                     <span>›</span> <span className="blinking-box"></span>
                  </div>
               </div>
            </div>
          </div>

          <div className="hero-actions">
            <motion.a 
              href="mailto:surendharsunadr793@gmail.com" 
              onClick={(e) => handleRedirect(e, 'contact', 'mailto:surendharsunadr793@gmail.com')}
              className="terminal-btn primary-btn cursor-target"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.0 }}
            >
              HIRE ME <Send size={14} />
            </motion.a>
            <motion.button 
              onClick={(e) => handleRedirect(e, 'resume', resume)}
              className="terminal-btn secondary-btn cursor-target"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 }}
            >
              RESUME <Download size={14} />
            </motion.button>
          </div>
        </div>

        <div className="hero-visual">
          <motion.div 
            className="profile-terminal-frame"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="scanner-line"></div>
            <img src={profile} alt="Surendhar" className="technical-profile-img" />
          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default Home