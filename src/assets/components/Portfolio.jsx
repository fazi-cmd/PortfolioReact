const Portfolio = () => {
  const projects = [
    {
      image: "portfolio1.jpg",
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, molestiae?",
      link: "https://github.com/fazi-cmd",
    },
    {
      image: "portfolio2.jpg",
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, molestiae?",
      link: "https://github.com/fazi-cmd",
    },
    {
      image: "resturant.jpg",
      title: "Restaurant System",
      description:
        "Built PHP restaurant management system using MySQL for data storage.",
      link: "https://github.com/fazi-cmd",
    },
    {
      image: "portfolio4.jpg",
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, molestiae?",
      link: "https://github.com/fazi-cmd",
    },
    {
      image: "portfolio5.jpg",
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, molestiae?",
      link: "https://github.com/fazi-cmd",
    },
    {
      image: "portfolio6.jpg",
      title: "Web Design",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, molestiae?",
      link: "https://github.com/fazi-cmd",
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">
        Latest <span>Projects</span>
      </h2>

      <div className="portfolio-container">
        {projects.map((project, index) => (
          <div className="portfolio-box" key={index}>
            <img
              src={`src/assets/images/${project.image}`}
              alt={project.title}
            />
            <div className="portfolio-layer">
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <a href={project.link}>
                <i className="bx bx-link-external"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
