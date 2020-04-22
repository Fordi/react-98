import React from 'react';
import classNames from '../helpers/classNames';

export default ({
  children,
  active,
  disabled,
  focused,
  ...rest
}) => (
  <button
    className={classNames(
      active && 'active',
      focused && 'focused',
    )}
    disabled={!!disabled}
    {...rest}
  >
    {children}
  </button>
);
