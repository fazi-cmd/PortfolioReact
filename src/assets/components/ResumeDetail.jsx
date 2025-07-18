const ResumeDetail = ({ activeTab }) => {
  const experienceData = [
    {
      year: "2025 - Present",
      title: "Frontend Developer Intern",
      company: "Loading IT Solution",
      description: "Gaining practical experience as Frontend Developer Intern.",
    },
    {
      year: "2022 - 2023",
      title: "Full Stack Developer",
      company: "Abc corp.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit.",
    },
    {
      year: "2021 - 2023",
      title: "Frontend Developer",
      company: "Abc corp.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit.",
    },
    {
      year: "2023 - Present",
      title: "Frontend Developer",
      company: "Abc corp.",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit.",
    },
  ];

  const educationData = [
    {
      year: "2023 - Present",
      title: "BS Computer Science",
      company: "University of Engineering and Technology",
      description: "",
    },
    {
      year: "2021 – 2023",
      title: "Intermediate",
      company: "Govt. College Muridke",
      description:
        "Completed intermediate studies with strengths in math, physics, and computing.",
    },
    {
      year: "2019 – 2021",
      title: "Matric",
      company: "Islamia High School",
      description:
        "Completed matriculation with solid grounding in science and analytical problem-solving.",
    },
  ];

  const skillsData = [
    { icon: "bx bxl-html5", name: "HTML5" },
    { icon: "bx bxl-css3", name: "CSS3" },
    { icon: "fa-brands fa-square-js", name: "JavaScript" },
    { icon: "bx bxl-react", name: "React.Js" },
    { icon: "bx bxl-vuejs", name: "Vue.Js" },
    { icon: "bx bxl-tailwind-css", name: "Tailwind CSS" },
    { icon: "fa-solid fa-database", name: "MySql" },
    { icon: "bx bxl-nodejs", name: "Node.Js" },
  ];

  const aboutData = [
    { label: "Name", value: "Faizan Ahmed" },
    { label: "Age", value: "20" },
    { label: "City", value: "Muridke" },
    { label: "Freelance", value: "Available" },
    { label: "Phone", value: "(+92)3104735375" },
    { label: "Email", value: "fhatzsff@gmail.com" },
    { label: "Language", value: "English,Urdu" },
    { label: "Nationality", value: "Pakistani" },
  ];

  return (
    <div className="resume-details">
      {activeTab === "experience" && (
        <div className="resume-detail experience active">
          <h2 className="heading">
            My <span>Experience</span>
          </h2>
          <p className="desc">
            Committed professional with hands-on experience driving projects,
            solving problems, and delivering results efficiently.
          </p>
          <div className="resume-list">
            {experienceData.map((exp, index) => (
              <div className="resume-item" key={index}>
                <p className="year">{exp.year}</p>
                <h3>{exp.title}</h3>
                <p className="company">{exp.company}</p>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "education" && (
        <div className="resume-detail education active">
          <h2 className="heading">
            My <span>Education</span>
          </h2>
          <p className="desc">
            Focused, high-achieving student with a strong academic foundation
            and commitment to lifelong learning.
          </p>
          <div className="resume-list">
            {educationData.map((edu, index) => (
              <div className="resume-item" key={index}>
                <p className="year">{edu.year}</p>
                <h3>{edu.title}</h3>
                <p className="company">{edu.company}</p>
                <p>{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "skills" && (
        <div className="resume-detail skills active">
          <h2 className="heading">
            My <span>Skills</span>
          </h2>
          <p className="desc">
            Versatile developer with strong problem-solving skills, creative
            thinking, and a passion for innovation.
          </p>
          <div className="resume-list">
            {skillsData.map((skill, index) => (
              <div className="resume-item" key={index}>
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === "about" && (
        <div className="resume-detail about active">
          <h2 className="heading">
            About <span>Me</span>
          </h2>
          <p className="desc">
            Passionate about learning, growth, and making a positive impact
            through dedicated effort.
          </p>
          <div className="resume-list">
            {aboutData.map((item, index) => (
              <div className="resume-item" key={index}>
                <p>
                  {item.label} <span>{item.value}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeDetail;
