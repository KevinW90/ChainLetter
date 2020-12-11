import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input = ({
  type,
  name,
  changeHandler,
  value,
  isControlled,
  labelText,
  showLabel,
  placeholder,
}) => (
  // Fragment to hold a label and input element
  <div className="input-container">
    {/* Wrapping the input inside the label (as is done inside the Nav component)
        eliminates the need for htmlFor and id pairings because the association
        is implicit --https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label */}

    <label htmlFor={name}>
      {showLabel && labelText}
    </label>
    <input
      type={type}
      onChange={changeHandler}
      value={isControlled ? '' : value}
      placeholder={placeholder}
      name={name}
    />
  </div>
);

export default Input;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  changeHandler: PropTypes.func,
  value: PropTypes.string,
  isControlled: PropTypes.bool,
  labelText: PropTypes.string.isRequired,
  showLabel: PropTypes.bool,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  changeHandler: null,
  value: null,
  isControlled: false,
  showLabel: true,
  placeholder: '',
};
