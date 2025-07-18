const Services = () => {
  const services = [
    {
      icon: "bx bx-code-alt",
      title: "Web Development",
      description:
        "Designing efficient, scalable websites to solve complex real-world problems.",
      link: "https://github.com/fazi-cmd",
    },
    {
      icon: "bx bxs-paint",
      title: "UI/UX Design",
      description:
        "Creating intuitive interfaces that enhance user engagement and accessibility.",
      link: "https://github.com/fazi-cmd",
    },
    {
      icon: "bx bxs-videos",
      title: "Video Editing",
      description:
        "Producing polished videos that clearly communicate ideas and stories.",
      link: "https://github.com/fazi-cmd",
    },
  ];

  return (
    <section className="services" id="services">
      <h2 className="heading">
        Our <span>Services</span>
      </h2>

      <div className="services-container">
        {services.map((service, index) => (
          <div className="services-box" key={index}>
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href={service.link} className="btn">
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
