import React, { useState } from 'react';
import PropTypes from 'prop-types';
import _uniqueId from 'lodash/uniqueId';

import './Input.scss';

// Warning: `value` prop on `input` should not be null. Consider using an empty string
// to clear the component or `undefined` for uncontrolled components.

// Warning: You provided a `value` prop to a form field without an `onChange` handler.
// This will render a read-only field. If the field should be mutable use `defaultValue`.
// Otherwise, set either `onChange` or `readOnly`.

const Input = ({
  type,
  name,
  changeHandler,
  value,
  isControlled,
  labelText,
  showLabel,
  placeholder,
}) => {
  /* When creating unique id values, state is recommended so the component does not
    change its ID on every render. Note we do not have a way to change the id
    generated from the useState call.
  */
  const [uid] = useState(_uniqueId('input-'));

  return (
    <div className="input-container">
      {/* Wrapping the input inside the label (as is done inside the Nav component)
          eliminates the need for htmlFor and id pairings because the association
          is implicit --https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label */}

      <label htmlFor={uid}>
        {showLabel && labelText}
        <input
          id={uid}
          type={type}
          onChange={changeHandler}
          value={isControlled ? '' : value}
          placeholder={placeholder}
          name={name}
        />
      </label>
    </div>
  );
};

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
  value: undefined,
  isControlled: false,
  showLabel: true,
  placeholder: '',
};
