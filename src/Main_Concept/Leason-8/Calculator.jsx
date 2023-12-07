import { Component } from 'react';

import TemperatureInput from './TemperatureInput ';
import BoilingVerdict from './BoilingVerdict';
import { tryConvert, toCelsius, toFahrenheit } from './Conversion';

class Calculator extends Component {
  state = { scale: 'celsius', temperature: 0 };

  handleChange = (scale, value) => {
    this.setState({ scale, temperature: value });
  };

  render() {
    const { temperature, scale } = this.state;
    const celsius =
      scale === 'fahrenheit' ? tryConvert(temperature, toCelsius) : temperature;

    const fahrenheit =
      scale === 'celsius' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <>
        <TemperatureInput
          temperature={celsius}
          scale='celsius'
          onTemperatureChange={this.handleChange}
        />
        <br />
        <TemperatureInput
          temperature={fahrenheit}
          scale='fahrenheit'
          onTemperatureChange={this.handleChange}
        />
        <br />
        <BoilingVerdict temperature={parseFloat(celsius)} />
      </>
    );
  }
}
export default Calculator;
