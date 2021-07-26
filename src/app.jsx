import React, { useState, useEffect } from "react";
import "./app.scss";
import { ReactComponent as GithubIcon } from "./assets/github.svg";
import { ReactComponent as LinkedInIcon } from "./assets/linkedin.svg";
import { ReactComponent as MailIcon } from "./assets/mail.svg";
import Logo from "./assets/logo.png";
import LogoInverted from "./assets/logo-inverted.png";
import Murakami from "./assets/murakami.png";
import Soup from "./assets/soup.png";
import Mars from "./assets/mars.png";
import Batuta from "./assets/batuta.png";

const App = () => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    window.scrollY > 80 ? setSticky(true) : setSticky(false);
  };

  const handleJump = (target) => {
    const element = document.querySelector(target);
    const { top } = element.getBoundingClientRect();
    window.scrollBy({ behavior: "smooth", top: isSticky ? top : top - 80 });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app" id="home">
      <header className={isSticky ? "active" : ""}>
        <div className="header-content">
          <span className="link" onClick={() => handleJump("#home")}>
            <img
              src={isSticky ? LogoInverted : Logo}
              alt="Dahyun Lee"
              className="header-logo"
            />
          </span>
          <span className="header-links">
            <span className="link" onClick={() => handleJump("#about")}>
              About
            </span>
            <span className="link" onClick={() => handleJump("#projects")}>
              Projects
            </span>
            <span className="link" onClick={() => handleJump("#contact")}>
              Contact
            </span>
          </span>
        </div>
      </header>
      <section className="hero">
        <div className="hero-content">
          <div className="hero-title">Hi, I'm Dahyun.</div>
          <div className="hero-blurb">
            I'm a software engineer/full stack developer with a passion for
            solving problems, learning new skills, and constantly improving
            myself.
          </div>
          <div className="hero-social">
            <a href="https://github.com/cleverplumtea">
              <GithubIcon className="icon" />
            </a>
            <a href="https://linkedin.com/in/dahyun-lee">
              <LinkedInIcon className="icon" />
            </a>
          </div>
        </div>
      </section>
      <section className="about" id="about">
        <div className="about-content">
          <h3>About Me</h3>
          <p>
            I'm a Brooklyn-born software engineer located in New York City. I've
            traveled through five continents and opened a restaurant in NYC. I'm
            curious about languages and I enjoy reading newspapers and thinking
            about The Brothers Karamazov.
          </p>
          <p>Say hello at lee.dahyun@gmail.com</p>
        </div>
      </section>
      <section className="projects" id="projects">
        <h3>Projects</h3>
        <div className="projects-content">
          <div className="project">
            <img className="project-image" src={Batuta} alt="Batuta" />
            <div className="project-content">
              <label>Batuta</label>
              <span className="project-subtitle">
                React-Native, Expo, SQLite
              </span>
              <span className="project-links">
                <a href="https://youtu.be/3ypNHNpK2L8">DEMO</a>
                <a href="https://github.com/bulgogi-burrito/batuta">GITHUB</a>
              </span>
            </div>
          </div>
          <div className="project">
            <img className="project-image" src={Mars} alt="Mars" />
            <div className="project-content">
              <label>All About Ares</label>
              <span className="project-subtitle">JavaScript, React</span>
              <span className="project-links">
                <a href="https://all-about-ares.herokuapp.com/">LIVE</a>
                <a href="https://github.com/cleverplumtea/all-about-ares">
                  GITHUB
                </a>
              </span>
            </div>
          </div>
          <div className="project">
            <img className="project-image" src={Soup} alt="Soup" />
            <div className="project-content">
              <label>One Soup To Rule Them All</label>
              <span className="project-subtitle">React, Redux, PostgreSQL</span>
              <span className="project-links">
                <a href="https://oneshoptorulethemall.herokuapp.com/">LIVE</a>
                <a href="https://github.com/2011-team-tenren/oneshoptorulethemall">
                  GITHUB
                </a>
              </span>
            </div>
          </div>
          <div className="project">
            <img className="project-image" src={Murakami} alt="Murakami" />
            <div className="project-content">
              <label>Murakami</label>
              <span className="project-subtitle">Python, Flask</span>
              <span className="project-links">
                <a href="https://github.com/cleverplumtea/haruki_murakami">
                  GITHUB
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="contact-content">
          <h3>Contact</h3>
          <span className="contact-social">
            <a href="mailto:lee.dahyun@gmail.com">
              <MailIcon className="icon" />
            </a>
            <a href="https://github.com/cleverplumtea">
              <GithubIcon className="icon" />
            </a>
            <a href="https://linkedin.com/in/dahyun-lee">
              <LinkedInIcon className="icon" />
            </a>
          </span>
        </div>
      </section>
    </div>
  );
};

export default App;
