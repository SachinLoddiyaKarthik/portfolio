import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = {
    'Data Visualization': ['Power BI', 'Tableau'],
    'Machine Learning': ['Supervised Learning', 'Decision Tree', 'SVM', 'Random Forest'],
    'Cloud Technologies': ['Azure', 'AWS', 'Databricks', 'Apache Spark', 'Apache Kafka'],
    'Programming': ['Python', 'R', 'SQL', 'Java', 'C++'],
    'Libraries': ['Pandas', 'NumPy', 'PyTorch', 'TensorFlow', 'Scikit-Learn']
  };

  return (
    <section className="section skills-section">
      <div className="section-container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-grid">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <div key={category} className="skill-category">
              <h3>{category}</h3>
              <div className="skills-list">
                {skills.map(skill => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;