import { useState } from "react";
import ResumeDetail from "./ResumeDetail";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const tabs = [
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "about", label: "About Me" },
  ];

  return (
    <section className="resume" id="resume">
      <div className="resume-container">
        <div className="resume-box">
          <h2>Why Hire Me?</h2>
          <p className="desc">
            Driven, skilled, and committed <br /> to delivering exceptional
            results consistently.
          </p>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`resume-btn ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="resume-box">
          <ResumeDetail activeTab={activeTab} />
        </div>
      </div>
    </section>
  );
};

export default Resume;
