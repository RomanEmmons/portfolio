import React from 'react';

const Contact = (props) => {
  return <div>{props.page === 'contact' ? <p>Contact</p> : null}</div>;
};

export default Contact;
