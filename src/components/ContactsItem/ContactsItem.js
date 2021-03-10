import React from 'react';
import { delete_button } from './ContactsItem.module.css';
import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions';

const ContactsItem = ({ filtered, onDelete }) => {
  return filtered.map(({ name, number, id }) => {
    return (
      <li key={id} name={name}>
        {name}: {number}
        <button
          type="button"
          className={delete_button}
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </li>
    );
  });
};

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(phonebookActions.deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(ContactsItem);
