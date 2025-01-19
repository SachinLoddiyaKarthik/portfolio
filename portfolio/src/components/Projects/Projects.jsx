// src/components/Projects/Projects.js
import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'COVID-19 Analysis',
      period: 'Jun 2024 - Jul 2024',
      technologies: 'Azure Data Factory, Azure Storage, Databricks, Kafka, DevOps',
      achievements: [
        'Integrated Kafka as a Data Source: Designed and implemented end-to-end data pipelines in Azure Data Factory (ADF) to process COVID-19 data from multiple sources, including real-time data streams from Kafka, resulting in a 30% improvement in overall data processing efficiency and enabling more accurate trend predictions.',
        'Developed Metadata-Driven Pipelines: Created complex data transformations using ADF features, which led to a 25% reduction in pipeline development time and enhanced data analysis capabilities by efficiently processing data from both Kafka and other sources.',
        'Implemented CI/CD Process: Established a robust CI/CD process using Azure DevOps, streamlining pipeline deployments and setting up comprehensive monitoring with Azure Monitor, resulting in a 35% decrease in release cycle time and a 20% reduction in system downtime.',
        'Leveraged Real-Time Streaming: Utilized Kafka\'s real-time data streaming capabilities alongside ADF\'s orchestration features to build a scalable architecture that effectively handled increased data volumes, providing near real-time insights into the evolving COVID-19 situation.'
      ]
    },
    {
      title: 'F1 Data Analytics Project',
      period: 'May 2024 - Jun 2024',
      technologies: 'Azure Synapse, Databricks, Pyspark, SparkSQL',
      achievements: [
        'Developed end-to-end ETL pipelines in Azure Synapse, integrating data ingestion from the Ergast API and automating execution with triggers for scheduled updates. Utilized PySpark and SparkSQL to optimize data processing workflows, implementing efficient data partitioning, caching, and parallel processing to enhance performance and scalability.',
        'Leveraged Azure Synapse for advanced analytics and data warehousing, implementing comprehensive data management practices such as schema enforcement, versioning, and robust monitoring. Applied best practices in data quality, reliability, and observability to maintain data integrity and operational efficiency, ensuring that the analytics environment was both resilient and responsive to changing data needs.',
        'Established a robust monitoring framework using Azure Monitor to track pipeline performance and data quality metrics. This proactive approach facilitated timely issue resolution and optimization of resource utilization, contributing to overall project success and enabling actionable insights into F1 data trends.'
      ]
    }
  ];

  return (
    <section className="section projects-section">
      <div className="section-container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <span className="project-period">{project.period}</span>
              </div>
              <div className="project-tech">
                <span className="tech-label">Technologies:</span>
                <span className="tech-stack">{project.technologies}</span>
              </div>
              <ul className="project-achievements">
                {project.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;