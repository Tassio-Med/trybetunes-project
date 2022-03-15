import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Inputs extends Component {
  render() {
    const {
      name,
      type,
      testid,
      value,
      onChange,
    } = this.props;

    return (
      <div>
        <label htmlFor={ name }>
          { name }
          <input
            id={ name }
            name={ name }
            type={ type }
            data-testid={ testid }
            value={ value }
            onChange={ onChange }
          />
        </label>
      </div>
    );
  }
}

Inputs.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  testid: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}.isRequired;

export default Inputs;
