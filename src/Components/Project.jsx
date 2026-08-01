import React, { useState } from 'react'
import '../assets/Styles/project.css'
import coding from '../assets/linkly.png'
import tech from '../assets/emp.png'
import cicd from '../assets/cicd.png'
import shop from '../assets/shopease.png'
import { Github, Cpu } from 'lucide-react'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    img: coding,
    title: "Linkly URL Shortener",
    category: "Full-Stack",
    tags: ["Spring Boot", "React.js", "PostgreSQL", "JWT", "REST API"],
    desc: "A secure URL Shortener platform enabling users to create, manage, and track shortened URLs with analytics.",
    link: "https://github.com/surendharsundar793-prog/-Linkly-Full-Stack-URL-Shortener-Analytics-Platform.git"
  },
  {
    id: 2,
    img: tech,
    title: "Employee Management System",
    category: "Java Full-Stack",
    tags: ["Java", "Spring Boot", "React.js", "Hibernate", "PostgreSQL"],
    desc: "Full-stack CRUD application for enterprise employee record management with ORM-based data persistence.",
    link: "https://github.com/surendharsundar793-prog/Employee-management-system.git"
  },
  {
    id: 3,
    img: cicd,
    title: "DevSecOps Observability",
    category: "Cloud & DevOps",
    tags: ["Jenkins", "Docker", "Kubernetes", "AWS EKS", "Grafana"],
    desc: "Automated Jenkins CI/CD pipeline on AWS EKS with shift-left security scanning and live Prometheus/Grafana dashboards.",
    link: "https://github.com/surendharsundar793-prog/Boardgame.git"
  },
  {
    id: 4,
    img: shop,
    title: "ShopEase",
    category: "React E-Commerce",
    tags: ["React.js", "React Router", "CSS", "Fakestore API", "Vite"],
    desc: "React-based e-commerce engine featuring responsive shopping cart, category filters, and local storage state hydration.",
    link: "https://github.com/surendharsundar793-prog/Shopease.git"
  }
];

const Project = () => {
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleExpand = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const handleRedirect = (e, type, url) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('trigger-redirect', { 
      detail: { type, url } 
    }));
  };

  return (
    <section className="project-section">
      <div className="project-container">
        <div className="project-header">
          <span className="project-subtitle">FEATURED WORK</span>
          <h3 className="project-main-title">Technical Projects</h3>
        </div>

        <div className="bento-terminal-grid">
          {projects.map((project, index) => (
            <motion.div 
              className="terminal-window" 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="window-topbar">
                <div className="window-controls"></div>
                <div className="window-title">
                  // {project.title.toLowerCase().replace(/\s+/g, '-')}
                </div>
              </div>
              
              <div className="window-content">
                <div className="project-preview-area">
                  <img src={project.img} alt={project.title} className="bento-image" />
                </div>
                
                <div className="project-meta-area">
                  <div className="project-category-badge">
                    <Cpu size={12} /> {project.category}
                  </div>
                  <h4 className="bento-project-title">{project.title}</h4>
                  
                  <p className={`bento-desc ${expandedProjects[project.id] ? 'expanded' : 'collapsed'}`}>
                    {project.desc}
                  </p>

                  <button 
                    onClick={() => toggleExpand(project.id)}
                    className="mobile-details-toggle cursor-target"
                  >
                    {expandedProjects[project.id] ? 'Show Less' : 'Show More'}
                  </button>
                  
                  <div className={`project-tags ${expandedProjects[project.id] ? 'expanded' : 'collapsed'}`}>
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="project-tag-chip">{tag}</span>
                    ))}
                  </div>
                  
                  <div className={`bento-links ${expandedProjects[project.id] ? 'expanded' : 'collapsed'}`}>
                    <a 
                      href={project.link} 
                      onClick={(e) => handleRedirect(e, 'github', project.link)} 
                      className="bento-link cursor-target"
                    >
                      <Github size={14} /> source_code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Project