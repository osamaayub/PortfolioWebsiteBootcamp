/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import ME from "../../assets/me-about.jpg";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="contaniner .about__container">
        <div className="about__me">
          <div className="about__image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about_card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4 months Working experience</small>
            </article>
            <article className="about_card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>5</small>
            </article>
            <article className="about_card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>12</small>
            </article>
            <p>
              I am a Front-end developer with 4 months of experience having
              Knowledge of HTML5,CSS3, Vanilla JavaScript,Bootstrap,React Js
              ,PHP and MYSQL. Currently looking for opportunities as a Associate
              Software Engineer in any reputable organization to enhance my
              skills and Knowledge by working in an proffesional environment.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
