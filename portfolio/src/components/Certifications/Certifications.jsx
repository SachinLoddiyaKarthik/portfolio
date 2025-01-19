import React from 'react';
import './Certifications.css';

const Certifications = () => {
  const certifications = [
    {
      title: 'Foundations: Data, Data, Everywhere',
      issuer: 'Google'
    },
    {
      title: 'Data Analytics Essentials',
      issuer: 'Cisco'
    },
    {
      title: 'Introduction to Data Science',
      issuer: 'Cisco'
    },
    {
      title: 'Databases and SQL for Data Science with Python',
      issuer: 'IBM'
    },
    {
      title: 'ETL and Data Pipelines with Shell, Airflow and Kafka',
      issuer: 'IBM'
    },
    {
      title: 'Azure Data Factory For Data Engineers',
      issuer: 'Udemy'
    },
    {
      title: 'Azure Databricks & Spark for Data Engineers',
      issuer: 'Udemy'
    },
    {
      title: 'Azure Synapse for Data Engineers',
      issuer: 'Udemy'
    },
    {
      title: 'SQL for Data Science',
      issuer: 'University of California'
    },
    {
      title: 'Oracle Cloud Infrastructure Foundations 2021 Certified Associate',
      issuer: 'Oracle'
    }
  ];

  return (
    <section className="section certifications-section">
      <div className="section-container">
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card">
              <div className="certification-content">
                <h3 className="certification-title">{cert.title}</h3>
                <span className="certification-issuer">{cert.issuer}</span>
              </div>
              <div className="certification-badge">
                <span className="badge-icon">🏆</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;