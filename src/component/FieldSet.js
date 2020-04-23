import React from 'react';

export default ({
  label,
  children,
  ...rest
}) => (
  <fieldset {...rest}>
    {label && <legend>{label}</legend>}
    {children}
  </fieldset>
);
