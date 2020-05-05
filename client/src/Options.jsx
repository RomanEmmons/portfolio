import React from 'react';

const Options = (props) => {
  let pages = ['about', 'portfolio', 'contact', 'breakout'];
  return (
    <div className="btn-container">
      {pages.map((page, i) => {
        if (page === 'breakout') {
          return (
            <button
              onClick={() => {
                props.selectPage(page);
              }}
              className="btn btn-animations hide"
              key={i}
            >
              {page}
            </button>
          );
        } else {
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
        }
      })}
    </div>
  );
};

export default Options;
