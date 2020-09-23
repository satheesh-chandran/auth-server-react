import React from 'react';

const Input = function (props) {
  const handleChange = function (event) {
    props.updateChange(event.target.value);
  };

  return (
    <input
      placeholder={props.placeholder}
      value={props.value}
      onChange={handleChange}
      type={props.type}
    ></input>
  );
};

export default Input;
