import React from 'react';
import classNames from '../helpers/classNames';

export default ({
  className,
  children,
  justify,
  style,
  ...rest
}) => (
  <div
    className={classNames(
      'field-row',
      className
    )}
    style={{
      ...style,
      ...(justify && {
        justifyContent: justify
      })
    }}
    {...rest}
  >
    {children}
  </div>
)
