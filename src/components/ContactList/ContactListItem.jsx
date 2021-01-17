import React from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';

function ContactListItem({ name, number, onDelete }) {
  return (
    <li className={s.contactItem}>
      <div className={s.contactWrapper}>
        <span>
          {name}: {number}
        </span>
        <button className={s.button} type="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onDelete: PropTypes.func,
};

export default ContactListItem;
