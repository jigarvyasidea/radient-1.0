import React from "react";
import Marquee from "react-fast-marquee";
import six from "../../../assets/images/AboutImages/DSC_5969.webp";
import eight from "../../../assets/images/AboutImages/DSC_7090.webp";
import five from "../../../assets/images/AboutImages/DSC_6861.webp";
import four from "../../../assets/images/AboutImages/DSC_6965.webp";
import three from "../../../assets/images/AboutImages/three.webp";
import two from "../../../assets/images/AboutImages/one.webp";
import seven from "../../../assets/images/AboutImages/two.webp";

import "./About.scss";

const About = () => {
  return (
    <>
      <div className="about__container" id="about">
        <div className="about__header">
          <h1>Journey</h1>
          <h2>About</h2>
        </div>

        <div className="about__content">
          <div className="about__desc">
            <p className="light">
              Radiate  empowers all fields to showcase creativity in solving
              real-life problems for a brighter future.
            </p>
            <p >
              Join us for the reinvigorated Radiate !  Radiate  was born from a vision to 
              unite hackers from across India in a celebration of code, innovation, and creativity.
               Hosted at Arya  College Of Engineering and IT Jaipur , Season 1 is set to continue this legacy,
                fostering a culture where dedication and imagination come together. Our commitment is to empower 
                participants to bring their ideas to life, making Season 1 your canvas to push the boundaries of technology. 
                Join us in this 36-hour coding fest to explore, collaborate, and build the future at a time. This season, 
                we welcome hackers of all skill levels to challenge themselves, grow, and contribute to our vibrant community.
            </p>

            <div className="about__marquee_container">
              <Marquee
                autoFill={true}
                pauseOnHover={true}
                className="about__marquee"
                speed={50}
                direction="right"
              >
                <img src={two} alt="a large group of people sitting in a room" className="mq_img" />
                <img src={three} alt="a group of people standing on a stage" className="mq_img" />
              </Marquee>

              <Marquee
                autoFill={true}
                pauseOnHover={true}
                className="about__marquee"
                speed={50}
                direction="left"
              >
                <img src={four} alt="a group of people posing for a photo" className="mq_img" />
                <img src={five} alt="a group of people standing on a stage" className="mq_img" />
                <img src={six} alt="a group of people standing in a room" className="mq_img" />
              </Marquee>
            </div>

            <h2>Our Journey Begin </h2>

            <div className="about__metrics">
              <div className="about__metrics_item">
                <p>400+</p>
                <span>Hackers</span>
              </div>
              <div className="about__metrics_item">
                <p>50+</p>
                <span>Partners</span>
              </div>

              <div className="about__metrics_item">
                <p>36+</p>
                <span>Hack hours</span>
              </div>

              <div className="about__metrics_item">
                <p>10+</p>
                <span>Events</span>
              </div>

              <div className="about__metrics_item">
                <p>100+</p>
                <span>Projects</span>
              </div>
              <div className="about__metrics_item">
                <p>15+</p>
                <span>Mentors</span>
              </div>
            </div>
          </div>

          <div className="about__marquee_container">
            <Marquee
              autoFill={true}
              pauseOnHover={true}
              className="about__marquee"
              speed={50}
              direction="right"
            >
              <img src={two} alt="a large group of people sitting in a room" className="mq_img" />
              <img src={three} alt="a group of people standing on a stage" className="mq_img" />
            </Marquee>

            <Marquee
              autoFill={true}
              pauseOnHover={true}
              className="about__marquee"
              speed={50}
              direction="left"
            >
              <img src={four} alt="a group of people posing for a photo" className="mq_img" />
              <img src={seven} alt="a group of people sitting in a room with computers" className="mq_img" />
              <img src={eight} alt="a sign on a building" className="mq_img" />
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
