import React from 'react';

const InputGroup = ({
  label,
  value,
  type,
  name,
  minLength,
  required,
  handleChange,
  errors,
}) => (
  <div className="form-group">
    <label htmlFor="phone">{label}</label>
    <input
      type={type}
      name={name}
      className={`inputadd ${errors ? 'shake' : null} `}
      minLength={minLength}
      required={required}
      onChange={handleChange}
      value={value}
    />
  </div>
);

export default InputGroup;
