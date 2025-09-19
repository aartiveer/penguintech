import React, { useState } from "react";
import './FAQ.css';

const faqData = [
  {
    question: "How to enroll the Trainings?",
    answer: "Go to the services pages and for appropriate course click on the ENROLL NOW button, submit the details."
  },
  {
    question: "Why is board bringup important?",
    answer: "Board bringup ensures that new hardware components function correctly and are compatible with the desired software environment."
  },
  {
    question: "What are the benefits of a common OS platform?",
    answer: "A common OS platform simplifies software development, deployment, and maintenance by providing a consistent environment across different hardware architectures."
  },
  {
    question: "What is an SDK (Software Development Kit)?",
    answer: "An SDK is a set of tools, libraries, and documentation that developers use to create software applications for a specific platform."
  },
  {
    question: "How do you implement virtual CI/CD?",
    answer: "We leverage cloud-based CI/CD pipelines, such as Microsoft Azure, Bitbucket Bamboo, and GitHub Actions, to enable rapid and reliable software development and deployment."
  },
  {
    question: "How do you support software integration?",
    answer: "We provide expert assistance in setting up software integration solutions and integrating open-source projects, ensuring seamless operation and compatibility."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <h2>{item.question}</h2>
            <span className={`arrow ${openIndex === index ? 'open' : ''}`}>&gt;</span>
          </div>
          {openIndex === index && (
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQ;
