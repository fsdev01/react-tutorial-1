import React, { Component } from "react";

class Form extends Component {
  initalState = {
    name: "",
    job: "",
  };

  state = this.initalState;

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  submitForm = () => {
    // Send data to parent
    this.props.handleSubmit(this.state);
    // Reset form to empty values
    this.setState(this.initalState);
  };

  render() {
    const { name, job } = this.state;
    return (
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={this.handleChange}
        />
        <label htmlFor="job">Job</label>
        <input
          type="text"
          id="job"
          name="job"
          value={job}
          onChange={this.handleChange}
        />
        <button onClick={this.submitForm}>Submit</button>
      </div>
    );
  }
}

export default Form;
