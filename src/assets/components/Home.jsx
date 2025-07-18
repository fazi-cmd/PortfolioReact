const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Faizan Ahmed</h1>
        <h3>
          And I'm a <span>Frontend Developer</span>
        </h3>
        <p>
          Turning creative ideas into responsive, modern websites. I build sleek
          UIs that deliver powerful user experiences.
        </p>
        <div className="social-media">
          <a href="https://github.com/fazi-cmd">
            {" "}
            <i className="bx bxl-github" style={{ color: "#0ef" }}></i>
          </a>
          <a href="https://linkedin.com/in/faizan-ahmed-a97271331">
            <i className="bx bxl-linkedin" style={{ color: "#0ef" }}></i>
          </a>
          <a href="https://instagram.com/faizanahmed.off?igsh=MXFoeGliNHUydm43cw==">
            <i className="bx bxl-instagram-alt" style={{ color: "#0ef" }}></i>
          </a>
        </div>
        <a href="Faizan (1).pdf" className="btn">
          Download CV
        </a>
      </div>
      <div className="home-img">
        <img src="src/assets/images/home1.png" alt="Profile" />
      </div>
    </section>
  );
};

export default Home;
