import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Data Engineer',
      company: 'Accenture',
      period: 'Jul 2021 - Jul 2023',
      achievements: [
        'Spearheaded a major SCPO (Supply Chain Planning and Optimization) upgrade project, designing and managing end-to-end ETL processes using Azure Data Factory. Facilitated the migration and transformation of critical supply chain data from diverse formats (CSV, JSON) into optimized Parquet files, resulting in a 40% increase in processing efficiency and minimizing business disruption.',
        'Leveraged Azure Databricks to transform raw supply chain data from Data Lake Gen2 into business-ready formats, improving data processing accuracy by 25% and reducing transformation times by 50%. This was crucial in handling increased data volumes and new data structures post-SCPO upgrade.',
        'Engineered robust error handling and recovery mechanisms within Azure Data Factory pipelines, achieving 98% data accuracy during the SCPO migration. Implemented monitoring and alerting using Azure Monitor, reducing support tickets by 25% and ensuring data integrity throughout the upgrade process.',
        'Created external tables, stored procedures, and views in Azure SQL Database to support data visualization and reporting for the new SCPO environment, ensuring data accessibility and proper structure for effective supply chain analysis and business intelligence.',
        'Developed interactive Power BI dashboards and reports that provided actionable insights into supply chain operations, supporting data-driven decisions and contributing to a 25% improvement in operational efficiency post-SCPO upgrade.',
        'Automated workflows by scheduling jobs using Azure Data Factory triggers and Databricks, and implemented CI/CD pipelines with Azure DevOps, resulting in a 20% boost in team efficiency and a 30% faster project delivery for the SCPO upgrade.',
        'Enhanced data quality and governance by implementing rigorous validation checks within the ETL processes and ensuring compliance with GDPR, thereby upholding high standards of data accuracy, security, and regulatory adherence in the new SCPO environment.'
      ]
    },
    {
      title: 'Data Engineer',
      company: 'Claritrics India Pvt Limited',
      period: 'Nov 2020 - May 2021',
      achievements: [
        'Leveraged Azure Data Factory and Azure Databricks to design and implement a robust ETL pipeline for an advanced Optical Character Recognition (OCR) solution, enhancing data accessibility and quality for downstream applications.',
        'Developed a sophisticated OCR tool using Python and OpenCV, which was seamlessly integrated within the Azure ecosystem, resulting in a 30% improvement in text extraction accuracy from images.',
        'Engineered an automated workflow in Azure Data Factory for orchestration, utilizing Azure Databricks for scalable data processing. This ensured timely and reliable extraction of textual data from images, facilitating efficient data flow for analysis.',
        'Implemented CI/CD practices by automating deployments to production and staging environments, utilizing Azure Data Factory triggers and Azure Databricks job scheduling. This streamlined approach led to a 20% increase in team efficiency and a 30% reduction in project delivery timelines.',
        'The solution provided high-quality, easily accessible textual data extracted from images, empowering stakeholders with actionable insights and demonstrating the effectiveness of Azure\'s data engineering tools in enhancing operational workflows and analytics capabilities.'
      ]
    }
  ];

  return (
    <section className="section experience-section">
      <div className="section-container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <div className="job-info">
                  <h3 className="job-title">{exp.title}</h3>
                  <p className="company-name">{exp.company}</p>
                </div>
                <span className="job-period">{exp.period}</span>
              </div>
              <ul className="achievements-list">
                {exp.achievements.map((achievement, i) => (
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

export default Experience;