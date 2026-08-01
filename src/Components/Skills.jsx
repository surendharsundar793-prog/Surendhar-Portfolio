import React from 'react'
import '../assets/Styles/skills.css'
import AnimatedContent from './AnimatedContent'
import { Code, Database, Cloud, Terminal } from 'lucide-react'

const skillCategories = [
  {
    title: "Frontend & Languages",
    icon: "code",
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Vite", "Java"]
  },
  {
    title: "Backend & Databases",
    icon: "database",
    skills: ["Spring Boot", "RESTful APIs", "Hibernate", "Spring Data JPA", "PostgreSQL", "Oracle SQL"]
  },
  {
    title: "Cloud & DevOps",
    icon: "cloud",
    skills: ["AWS", "Docker", "Kubernetes", "Jenkins","GitHub Actions", "Terraform", "Ansible"]
  },
  {
    title: "Observability & Tools",
    icon: "terminal",
    skills: ["Prometheus", "Grafana", "Linux & Bash", "Git & GitHub", "Maven", "Postman"]
  }
];

const iconMap = {
  code: <Code size={18} />,
  database: <Database size={18} />,
  cloud: <Cloud size={18} />,
  terminal: <Terminal size={18} />
};

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="skills-container">

        <div className="skills-header">
          <span className="skills-subtitle">MY TOOLKIT</span>
          <h3 className="skills-main-title">Skills &amp; Technologies</h3>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <AnimatedContent
              key={index}
              distance={20}
              duration={0.6}
              delay={index * 0.1}
              className="skill-card-wrapper"
              once
            >
              <div className="skill-card">
                <div className="skill-card-header">
                  <div className="skill-card-icon-wrap">
                    {iconMap[category.icon]}
                  </div>
                  <h4 className="skill-card-title">{category.title}</h4>
                </div>
                
                <div className="skill-card-body">
                  <div className="skills-badges-wrap">
                    {category.skills.map((skill, sIdx) => (
                      <span className="skill-badge cursor-target" key={sIdx}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedContent>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills
