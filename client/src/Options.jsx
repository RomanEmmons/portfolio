import React from 'react';

const Options = (props) => {
  let pages = ['about', 'portfolio', 'contact', 'breakout'];
  return (
    <div className="btn-container">
      {pages.map((page, i) => {
        return (
          <button
            onClick={() => {
              props.selectPage(page);
            }}
            className="btn btn-animations"
            key={i}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Options;
