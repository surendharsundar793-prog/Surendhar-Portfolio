import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import '../../assets/Styles/navbar.css'
import { X, User, Briefcase, Cpu, Send, Menu, Home, Terminal } from 'lucide-react'

const navLinks = [
  // { name: 'HOME',    id: '#home',    icon: <Home size={16} /> },
  { name: 'ABOUT',   id: '#about',   icon: <User size={16} /> },
  { name: 'STACK',   id: '#skills',  icon: <Cpu size={16} /> },
  { name: 'PROJECTS', id: '#project', icon: <Briefcase size={16} /> },
  { name: 'CONTACT',  id: '#contact', icon: <Send size={16} /> }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll progress calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);

    const handleTrigger = (e) => {
      const { type, url, customTitle, customMsg } = e.detail;
      triggerRedirect(type, url, customTitle, customMsg);
    };
    window.addEventListener('trigger-redirect', handleTrigger);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('trigger-redirect', handleTrigger);
    };
  }, []);

  const triggerRedirect = (type, url, customTitle, customMsg) => {
    setOpen(false);
    if (type === 'shutdown' || type === 'gateway') {
      window.location.href = '/';
      return;
    }

    if (url.startsWith('#')) {
      const el = document.querySelector(url);
      if (el) {
        const offset = (window.innerWidth > 1024 ? 0 : 80);
        if (window.lenis) {
          window.lenis.scrollTo(el, { offset: -offset });
        } else {
          const top = el.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    } else if (url) {
      window.open(url, '_blank');
    }
  };

  const scrollToSection = (e, id) => {
    e.preventDefault();
    setOpen(false);
    setActiveSection(id);
    
    if (id === '#home') {
      if (window.lenis) {
        window.lenis.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    const el = document.querySelector(id);
    if (el) {
      const offset = (window.innerWidth > 1024 ? 0 : 80);
      if (window.lenis) {
        window.lenis.scrollTo(el, { offset: -offset });
      } else {
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  };

  return (
    <>

      {/* Brand Logo - Top Left */}
      <motion.a 
        href="/" 
        className="sidebar-brand cursor-target" 
        onClick={(e) => scrollToSection(e, '#home')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        SURENDHAR<span>:~$</span>
      </motion.a>
      
      {/* Status Dot HUD - Top Right */}
      <motion.div 
        className="status-indicator"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <span className="status-dot"></span>
        <span className="status-text">ONLINE</span>
      </motion.div>

      {/* Innovative Desktop Sidebar */}
      <motion.aside 
        className="desktop-sidebar"
        initial={{ x: -150, opacity: 0, y: '-50%' }}
        animate={{ x: 0, opacity: 1, y: '-50%' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav className="sidebar-nav">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a 
                key={link.name}
                href={link.id} 
                className={`sidebar-link cursor-target ${isActive ? 'active' : ''}`}
                onClick={(e) => scrollToSection(e, link.id)}
              >
                <div className="link-icon">{link.icon}</div>
                <span className="link-label">{link.name}</span>
              </a>
            );
          })}
        </nav>
      </motion.aside>

      {/* Mobile Top Bar */}
      <div className={`mobile-top-bar ${scrolled ? 'scrolled' : ''}`}>
        <a href="/" className="mobile-brand cursor-target" onClick={(e) => scrollToSection(e, '#home')}>
          SURENDHAR<span>:~$</span>
        </a>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <div className="mobile-bottom-nav">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <a 
              key={link.name}
              href={link.id}
              className={`mobile-bottom-link cursor-target ${isActive ? 'active' : ''}`}
              onClick={(e) => scrollToSection(e, link.id)}
            >
              <span className="mobile-bottom-icon">{link.icon}</span>
              {isActive && <span className="mobile-bottom-label">{link.name}</span>}
            </a>
          );
        })}
      </div>
    </>
  )
}

export default Navbar