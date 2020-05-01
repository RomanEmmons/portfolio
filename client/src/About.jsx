import React from 'react';

const About = (props) => {
  return (
    <div className="about">
      <div>
        <div className="aboutDescription">
          <h3>
            Hello! I’m Roman, a San Francisco based Software Engineer. I have a
            passion for problem solving and learning new technologies. When I’m
            not writing fun and interesting full stack applications, I’m hanging
            out with my daughter or writing original cocktail menus.{' '}
          </h3>{' '}
          <h3>
            If you have a project that touches peoples' lives in a positive way,
            I'd like to see how my expertise and your vision can align to make
            the world a better place.
          </h3>
          <a
            className="resumeLink"
            href="https://docs.google.com/document/d/1nFQStBEMXM8axnWOH1fD_k7nsr8zGqjFr1zNUMbKLvQ/edit?usp=sharing"
          >
            Check out my resume.
          </a>
          <h3
            className="contactLink"
            onClick={() => {
              props.selectPage('contact');
            }}
          >
            Feel free to reach out to me!
          </h3>
        </div>
        <img className="headShot " src="../images/portfolio.jpg"></img>
      </div>
    </div>
  );
};

export default About;
