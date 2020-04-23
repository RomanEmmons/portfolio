import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import {
  chonky,
  rsvp,
  stock,
  blue,
  repo,
} from '../../portfolioData/portfolio.js';

const repos = [chonky, rsvp, stock, blue, repo];

const Portfolio = (props) => {
  return (
    <div className="portOuter">
      <Carousel
        className="projects"
        interval={20000}
        infiniteLoop={true}
        autoPlay={true}
        showThumbs={false}
      >
        {repos.map((application, i) => (
          <div key={i} className="portfolio">
            <h2>{application.title}</h2>
            <div className="innerPort">
              <div className="portfolioImage">
                <img src={application.image.default}></img>
              </div>
              <div className="facts">
                <p>{application.description}</p>
                <p>Stack: {application.stack}</p>
                <br></br>
                <a href={application.github}>{application.github}</a>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Portfolio;
