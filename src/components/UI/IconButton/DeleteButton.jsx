import React from 'react';
import PropTypes from 'prop-types';
import s from './DeleteButton.module.css';
import { ReactComponent as DeleteIcon } from '../../../icons/bin.svg';

const DeleteButton = ({ className, onClick, ...restProps }) => {
  const classList = [className, s.button].join(' ');

  return (
    <button
      type="button"
      className={classList}
      onClick={onClick}
      {...restProps}
    >
      <DeleteIcon width="14" height="14" fill="#fff" />
    </button>
  );
};

DeleteButton.defaultProps = {
  className: '',
  children: null,
  onClick: () => null,
};

DeleteButton.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
  'aria-label': PropTypes.string.isRequired,
};

export default DeleteButton;
