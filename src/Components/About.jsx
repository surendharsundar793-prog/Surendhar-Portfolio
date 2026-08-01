import React from 'react'
import '../assets/Styles/about.css'
import profilePic from '../assets/profile.jpeg'
import AnimatedContent from './AnimatedContent'
import ScrollReveal from './ScrollReveal'

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        
        <div className="about-content-split">
          
          <AnimatedContent 
            distance={80} 
            direction="horizontal" 
            reverse 
            duration={1.2} 
            ease="power3.out" 
            threshold={0.15} 
            once 
            className="about-visual-left"
          >
            <div className="about-image-wrapper">
              <div className="about-image-glow"></div>
              <img src={profilePic} alt="Surendhar S" className="about-image" />
            </div>
          </AnimatedContent>

          <div className="about-description-right">
            <AnimatedContent distance={40} duration={1} ease="power3.out" threshold={0.15} once>
              <h2 className="about-headline">
                <ScrollReveal
                  start="top 85%"
                  end="top 50%"
                  textClassName="about-headline-reveal"
                >
                  Bridging Application Engineering and Infrastructure Automation.
                </ScrollReveal>
              </h2>
            </AnimatedContent>

            <AnimatedContent distance={30} duration={1} delay={0.2} ease="power3.out" threshold={0.15} once className="about-body">
              <p>
                I approach software development with a deep focus on clean architecture, performance optimization, and robust systems engineering. I bridge the gap between high-fidelity frontends and secure, automated backend infrastructures.
              </p>
              <p>
                My passion lies in building scalable web platforms and automating their pipelines to deliver reliable, production-ready systems. From coding RESTful services to configuring DevOps build stages, I ensure every line of code is optimized for scale.
              </p>
            </AnimatedContent>

            <AnimatedContent distance={30} duration={1} delay={0.4} ease="power3.out" threshold={0.15} once className="about-metrics-grid">
              <div className="metric-box">
                <span className="metric-label">CURRENT LOC:</span>
                <span className="metric-value">Bangalore, IN</span>
              </div>
              <div className="metric-box">
                <span className="metric-label">PHILOSOPHY:</span>
                <span className="metric-value">Keep learning. Technology never stops evolving.</span>
              </div>
              <div className="metric-box">
                <span className="metric-label">STATUS:</span>
                <span className="metric-value">Available Immediately</span>
              </div>
              <div className="metric-box">
                <span className="metric-label">WORK_STYLE:</span>
                <span className="metric-value"> Onsite / Hybrid / Remote</span>
              </div>
              <div className="metric-box full-width-metric">
                <span className="metric-label">QUALIFICATION:</span>
                <span className="metric-value">B.E. in Electronics and Communication Engineering — Adhiyamaan College of Engineering</span>
              </div>
            </AnimatedContent>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
