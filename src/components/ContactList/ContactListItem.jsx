import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../UI/IconButton/IconButton';
import s from './ContactList.module.css';
import { ReactComponent as DeleteIcon } from '../../icons/bin.svg';
import { ReactComponent as CallIcon } from '../../icons/phone.svg';

function ContactListItem({ name, number, onDelete }) {
  const telNum = ['tel:', number].join('');
  return (
    <li className={s.contactItem}>
      <div className={s.contactWrapper}>
        <span>
          {name}: {number}
        </span>
        <a href={telNum}>
          <IconButton
            title="Call up"
            className={s.button}
            aria-label="Make a call "
          >
            <CallIcon className={s.icon} fill="#0ce620" />
          </IconButton>
        </a>
      </div>
      <IconButton
        title="Delete contact"
        onClick={onDelete}
        aria-label="Delete contact"
      >
        <DeleteIcon width="14" height="14" fill="#fff" />
      </IconButton>
    </li>
  );
}

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func,
};

export default ContactListItem;
