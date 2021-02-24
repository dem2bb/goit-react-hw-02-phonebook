import React from 'react';
import { delete_button } from './ContactsItem.module.css';
import PropTypes from 'prop-types';

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

ContactsItem.propTypes = {
  filtered: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactsItem;
