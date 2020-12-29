import React from 'react';

const Input = ({ placeholder, value, updateChange, type }) => (
  <input
    placeholder={placeholder}
    value={value}
    onChange={event => updateChange(event.target.value)}
    type={type}
  ></input>
);

export default Input;
