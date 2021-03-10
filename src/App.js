import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactsItem from './components/ContactsItem/ContactsItem';
import Filter from './components/Filter/Filter';
import ContactForm from './components/ContactForm/ContactForm';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h2>Phonebook</h2>
        <ContactForm />
        {this.props.contacts.length > 0 && (
          <>
            <h2>Contacts</h2>
            <Filter />
            <ul className="contacts">
              <ContactsItem filtered={this.props.contacts} />
            </ul>
          </>
        )}
      </div>
    );
  }
}

const getFilteredContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter(item =>
    item.name.toLowerCase().includes(normalizedFilter),
  );
};

const mapStateToProps = state => {
  const { filter, items } = state.contacts;
  const visibleContacts = getFilteredContacts(items, filter);
  return {
    contacts: visibleContacts,
  };
};

export default connect(mapStateToProps)(App);
