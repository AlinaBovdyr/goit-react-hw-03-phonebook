import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from '../UI/IconButton/DeleteButton';
import s from './ContactList.module.css';

function ContactListItem({ name, number, onDelete }) {
  return (
    <li className={s.contactItem}>
      <div className={s.contactWrapper}>
        <span>
          {name}: {number}
        </span>
        <DeleteButton
          title="Delete contact"
          className={s.button}
          onClick={onDelete}
          aria-label="Delete contact"
        />
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
