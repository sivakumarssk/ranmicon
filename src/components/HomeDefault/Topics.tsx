import React from 'react';
import '../../../styles/Topics.css'; // Add your custom CSS here for styling

const topics = [
  {
    title: "Column 1",
    items: [
      "Drug Discovery & Development",
      "Pre-clinical Research",
      "Drug Screening & Designing",
      "Drug Delivery Systems",
      "Pharmaceutical Product Development",
      "Pharmaceutical Manufacturing",
      "Quality Control & Quality Assurance",
      "Clinical Trials & Case Studies",
      "Pharmacotherapeutics",
    ],
  },
  {
    title: "Column 2",
    items: [
      "Regulatory & HTA Review",
      "FDA Approvals",
      "Product Management",
      "Market Prediction",
      "Existing Drugs Enhancement",
      "Pharmaceutical Chemistry",
      "PKPD/Biopharmaceutics",
      "Pharmaceutical Statistics",
      "Pharmacology & Toxicology",
    ],
  },
  {
    title: "Column 3",
    items: [
      "Pharmaceutical Analysis",
      "Pharmacogenomics",
      "Natural Product Chemistry",
      "Safety & Monitoring",
      "Personalized Medicine",
      "Education & Practice",
      "Nanomedicine",
      "Industrial Pharmacy",
      "Covid & Healthcare",
      "Artificial Intelligence in R&D",
    ],
  },
];

const Topics = () => {
  return (
    <div className="topics-container">
      <h2>Topics of Discussion</h2>
      <div className="columns">
        {topics.map((column, index) => (
          <div className="column" key={index}>
            <ul>
              {column.items.map((item, idx) => (
                <li key={idx}>
                  <span role="img" aria-label="checkmark">✔️</span> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topics;
