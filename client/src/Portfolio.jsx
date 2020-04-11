import React from 'react';

const Portfolio = (props) => {
  return <div>{props.page === 'portfolio' ? <p>Portfolio</p> : null}</div>;
};

export default Portfolio;
