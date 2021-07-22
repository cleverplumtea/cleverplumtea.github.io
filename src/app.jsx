import React, { useState, useEffect } from "react";
import "./app.scss";
import { ReactComponent as GithubIcon } from "./assets/github.svg";
import { ReactComponent as LinkedInIcon } from "./assets/linkedin.svg";
import { ReactComponent as MailIcon } from "./assets/mail.svg";
import Logo from "./assets/logo.png";
import LogoInverted from "./assets/logo-inverted.png";
import Chatter from "./assets/chatter.png";
import aMDB from "./assets/amdb.png";
import foodie from "./assets/foodie.png";
import YummyDish from "./assets/yummy.png";

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
              alt="Peter Cho"
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
            I'm a software engineer with a passion for solving problems,
            learning new skills, and constantly improving myself.
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
          <p>I'm a software engineer located in New York City.</p>
        </div>
      </section>
      <section className="projects" id="projects">
        <h3>Projects</h3>
        <div className="projects-content">
          <div className="project">
            <img className="project-image" src={Chatter} alt="Chatter" />
            <div className="project-content">
              <label>Chatter</label>
              <span className="project-subtitle">
                React, Ruby on Rails, PostgreSQL
              </span>
              <span className="project-links">
                <a href="http://cute-bird.surge.sh/">LIVE</a>
                <a href="https://github.com/pcho90/chatter">GITHUB</a>
              </span>
            </div>
          </div>
          <div className="project">
            <img className="project-image" src={aMDB} alt="aMDB" />
            <div className="project-content">
              <label>aMDB</label>
              <span className="project-subtitle">React</span>
              <span className="project-links">
                <a href="https://unruffled-curran-775cfe.netlify.app/">LIVE</a>
                <a href="https://github.com/pcho90/amdb">GITHUB</a>
              </span>
            </div>
          </div>
          <div className="project">
            <img className="project-image" src={foodie} alt="foodie" />
            <div className="project-content">
              <label>foodie</label>
              <span className="project-subtitle">JavaScript</span>
              <span className="project-links">
                <a href="https://unruffled-khorana-a6a8a5.netlify.app/">LIVE</a>
                <a href="https://github.com/pcho90/foodie">GITHUB</a>
              </span>
            </div>
          </div>
          <div className="project">
            <img className="project-image" src={YummyDish} alt="Yummy Dish" />
            <div className="project-content">
              <label>Yummy Dish</label>
              <span className="project-subtitle">React, Express, MongoDB</span>
              <span className="project-links">
                <a href="http://tan-wrench.surge.sh/">LIVE</a>
                <a href="https://github.com/pcho90/yummy-dish">GITHUB</a>
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
