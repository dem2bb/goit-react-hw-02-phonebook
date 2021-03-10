import React, { Component } from 'react';
import { form, button, form_input } from './ContactForm.module.css';
import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';

class ContactForm extends Component {
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
    const found = this.props.contacts.find(item => {
      return item.name === this.state.name || item.number === this.state.number;
    });
    if (found) {
      alert('Такой контакт уже есть!');
      return;
    }
    this.props.onSubmit(this.state);
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

const mapDispatchToProps = dispatch => ({
  onSubmit: text => dispatch(phonebookActions.addContact(text)),
});

const mapStateToProps = state => ({
  contacts: state.contacts.items,
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
