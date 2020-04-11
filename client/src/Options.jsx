import React from 'react';

const Options = (props) => {
  let pages = ['About', 'Portfolio', 'Contact'];
  return (
    <div className="btn-container">
      {pages.map((page, i) => {
        return (
          <button
            onClick={() => {
              props.selectPage(page);
            }}
            className="btn third"
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
