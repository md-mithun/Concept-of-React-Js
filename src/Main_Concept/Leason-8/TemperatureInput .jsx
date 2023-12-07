/* eslint-disable react/prop-types */
import { Component } from 'react';
class TemperatureInput extends Component {
  render() {
    const { temperature, scale, onTemperatureChange } = this.props;
    return (
      <div>
        <fieldset>
          <legend>Enter temperature in {scale}</legend>
          <input
            type='text'
            value={temperature}
            onChange={(e) => onTemperatureChange(scale, e.target.value)}
          />
        </fieldset>
      </div>
    );
  }
}
export default TemperatureInput;
