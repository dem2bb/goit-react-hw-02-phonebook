import React, { Component } from 'react';

import ContactsItem from './components/ContactsItem/ContactsItem';
import Filter from './components/Filter/Filter';
import ContactForm from './components/ContactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = contact => {
    const found = this.state.contacts.find(item => {
      return item.name === contact.name || item.number === contact.number;
    });
    if (found) {
      alert('Такой контакт уже есть!');
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(item =>
      item.name.toLowerCase().includes(normalizedFilter),
    );
  };

  handleDelete = id => {
    this.setState(prevState => {
      const index = prevState.contacts.findIndex(item => item.id === id);
      const contacts = [
        ...prevState.contacts.slice(0, index),
        ...prevState.contacts.slice(index + 1),
      ];
      return { contacts };
    });
  };

  render() {
    return (
      <div className="container">
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.addContact} />
        {this.state.contacts.length > 0 && (
          <>
            <h2>Contacts</h2>
            <Filter value={this.state.filter} onChange={this.changeFilter} />
            <ul className="contacts">
              <ContactsItem
                filtered={this.getFilteredContacts()}
                onDelete={this.handleDelete}
              />
            </ul>
          </>
        )}
      </div>
    );
  }
}

export default App;
