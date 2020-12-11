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
  <>
    {/* 
      Wrapping the input inside the label (as is done inside the Nav component)
      eliminates the need for htmlFor and id pairings because the association
      is implicit --https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label
    */}

    <label>
      {labelText}
      <input
        // eslint-disable-next-line react/input-has-type
        type={type}
        // onChange={changeHandler}
        // value={value}
        placeholder={placeholder}
      >
      </input>
    </label>
  </>
);

export default Input;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  variant: PropTypes.string.isRequired,
  clickHandler: PropTypes.func,
  text: PropTypes.string,
  value: PropTypes.string,
  isControlled: PropTypes.bool,
  labelText: PropTypes.string,
  showLabel: PropTypes.bool,
  placeholder: PropTypes.string,
};

Button.defaultProps = {
  clickHandler: null,
  text: 'Confirm',
};
