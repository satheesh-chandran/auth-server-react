import React, { useState } from 'react';

const Input = function (props) {
  const [value, changeValue] = useState('');

  const handleChange = function (event) {
    const text = event.target.value;
    changeValue(text);
    props.updateChange(text);
  };

  return (
    <input
      placeholder={props.placeholder}
      value={value}
      onChange={handleChange}
    ></input>
  );
};

export default Input;
