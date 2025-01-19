import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      degree: 'Master of Science in Data Science',
      school: 'Western Michigan University',
      location: 'Kalamazoo, Michigan',
      period: 'Aug 2023 - Apr 2025',
      gpa: '3.84/4'
    },
    {
      degree: 'Bachelor of Engineering in ECE',
      school: 'Anna University',
      location: 'Chennai, India',
      period: 'Aug 2016 - May 2020',
      gpa: '7.34/10'
    }
  ];

  return (
    <section className="section education-section">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {education.map((edu, index) => (
            <div key={index} className="education-card">
              <h3 className="degree">{edu.degree}</h3>
              <p className="school-info">{edu.school}, {edu.location}</p>
              <div className="education-details">
                <span className="period">{edu.period}</span>
                <span className="gpa">GPA: {edu.gpa}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;