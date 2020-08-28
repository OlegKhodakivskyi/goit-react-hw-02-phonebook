import React, { Component } from "react";
// import PropTypes from "prop-types";

export default class Contacts extends Component {
  state = {
    contacts: [],
    name: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const { name } = this.state;
    return (
      <>
        <div>
          <h2>Phonebook</h2>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="Name">
              Name
              <input
                type="text"
                value={name}
                onChange={this.handleChange}
                name="name"
              />
            </label>

            <button type="submit"> Add contact</button>
          </form>
        </div>
      </>
    );
  }
}
