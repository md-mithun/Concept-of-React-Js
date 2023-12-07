import { Component } from 'react';

class Form extends Component {
  // Initialize state with initial values for name, message, country, and isAdult
  state = {
    name: 'name..', // Default name value
    msg: 'msg..', // Default message value
    country: 'Bangladesh', // Default country value
    isAdult: true, // Default value for isAdult checkbox
  };

  // Handle change event for all input fields
  handleChange = (event) => {
    // Extract the target input's name and value
    const { name, value } = event.target;

    // Update the state with the updated value for the corresponding input field
    this.setState({ [name]: value });
  };

  // Handle change event for the isAdult checkbox
  handleCheckBtn = (event) => {
    // Toggle the isAdult state based on the checkbox checked status
    this.setState({ isAdult: event.target.checked });
  };

  // Handle form submission
  handleSubmit = (event) => {
    // Prevent default form submission behavior
    event.preventDefault();

    // Log the current state to the console for debugging purposes
    console.log(this.state);
  };

  render() {
    // Extract state values for name, message, country, and isAdult
    const { name, msg, country, isAdult } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        {/* Label for name input */}
        <label htmlFor='name'>
          Name:
          <input
            type='text'
            name='name'
            onChange={this.handleChange}
            value={name}
          />
        </label>

        <br />
        <br />

        {/* Label for message textarea */}
        <label htmlFor='msg'>
          Message
          <textarea
            name='msg'
            value={msg}
            onChange={this.handleChange}></textarea>
        </label>

        <br />
        <br />

        {/* Label and select for country selection */}
        <label htmlFor='country'>
          Country:
          <select name='country' value={country} onChange={this.handleChange}>
            <option value='Bangladesh'>Bangladesh</option>
            <option value='India'>India</option>
            <option value='America'>America</option>
          </select>
        </label>

        <br />
        <br />

        {/* Checkbox for indicating adult status */}
        <label htmlFor='isAdult'>
          adult?{' '}
          <input
            type='checkbox'
            name='isAdult'
            checked={isAdult}
            onChange={this.handleCheckBtn}
          />
        </label>

        <br />
        <br />

        {/* Submit button for submitting the form */}
        <input type='submit' value='submit' />
      </form>
    );
  }
}

export default Form;
