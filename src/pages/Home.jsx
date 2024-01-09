import React, { useEffect, useState } from "react";
import NavBar from "./../components/navBar";

import Logo from "../components/logo";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faStackOverflow,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import INFO from "../data/user";
import AllProjects from "../components/projects/allProjects";

const Home = () => {
  const [stayLogo, setStayLogo] = useState(false);
  const [logoSize, setLogoSize] = useState(80);
  const [oldLogoSize, setOldLogoSize] = useState(80);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      let scroll = Math.round(window.pageYOffset, 2);

      let newLogoSize = 80 - (scroll * 4) / 10;

      if (newLogoSize < oldLogoSize) {
        if (newLogoSize > 40) {
          setLogoSize(newLogoSize);
          setOldLogoSize(newLogoSize);
          setStayLogo(false);
        } else {
          setStayLogo(true);
        }
      } else {
        setLogoSize(newLogoSize);
        setStayLogo(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [logoSize, oldLogoSize]);

  const logoStyle = {
    display: "flex",
    position: stayLogo ? "fixed" : "relative",
    top: stayLogo ? "3vh" : "auto",
    zIndex: 999,
    border: stayLogo ? "1px solid white" : "none",
    borderRadius: stayLogo ? "50%" : "none",
    boxShadow: stayLogo ? "0px 4px 10px rgba(0, 0, 0, 0.25)" : "none",
  };

  return (
    <div>
      <NavBar active="home" />
      <div className="home content-wrapper">
        <div className="home-logo-container">
          <div style={logoStyle}>
            <Logo width={logoSize} link={false} />
          </div>
        </div>
        <div className="home-container">
          <div className="home-content">
            <div className="home-left-side">
              <div className="title home-title">{INFO.home.title}</div>
              <div className="subtitle home-subtitle">
                {INFO.home.description}
              </div>
            </div>
            <div className="home-right-side">
              <div className="home-image">
                <div className="image-wrapper">
                  <img
                    src="images/homepage.jpeg"
                    alt="about"
                    className="home-img"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="homepage-socials">
            <a href={INFO.socials.twitter} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faTwitter}
                className="homepage-social-icon"
              />
            </a>
            <a href={INFO.socials.github} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                className="homepage-social-icon"
              />
            </a>
            <a
              href={INFO.socials.stackoverflow}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faStackOverflow}
                className="homepage-social-icon"
              />
            </a>
            <a href={INFO.socials.instagram} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faInstagram}
                className="homepage-social-icon"
              />
            </a>
            <a
              href={`mailto:${INFO.main.email}`}
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faMailBulk}
                className="homepage-social-icon"
              />
            </a>
          </div>

          <div className="home-projects">
            <AllProjects />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
