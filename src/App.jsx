import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    characters: [{ name: "Robert", job: "Tutor" }],
  };

  handleSubmit = (character) => {
    this.setState({ characters: [...this.state.characters, character] });
  };

  removeCharacter = (index) => {
    const modifiedState = this.state.characters.filter((item, i) => {
      return index !== i;
    });
    this.setState({ characters: modifiedState });
  };

  render() {
    return (
      <div className="container">
        <h1>React Tutorial</h1>
        <p>Add a person with a name and a job to the table</p>
        <Table
          characterData={this.state.characters}
          removeCharacter={this.removeCharacter}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
