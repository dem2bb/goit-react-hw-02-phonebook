import React, { Component } from 'react';
import { form, button, form_input } from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

class ContactForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    });
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={form} onSubmit={this.onHandleSubmit}>
        <h4>Name</h4>
        <input
          className={form_input}
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        ></input>
        <h4>Number</h4>
        <input
          className={form_input}
          type="number"
          name="number"
          value={this.state.number}
          onChange={this.handleChange}
        ></input>
        <button type="submit" className={button}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
