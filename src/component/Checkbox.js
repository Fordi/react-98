import React, { useState } from  'react';
import useUid from '../helpers/useUid';

export default ({
  id,
  children,
  checked: initChecked,
  disabled,
  value,
  className,
  onChange,
  name,
  ...rest
}) => {
  const uid = useUid(id);
  const [checked, setChecked] = useState(initChecked);
  const toggle = e => {
    setChecked(!checked);
    return onChange instanceof Function ? onChange(e) : undefined;
  };
  return (
    <>
      <input
        checked={!!checked}
        className={className}
        disabled={!!disabled}
        id={uid}
        name={name}
        onChange={toggle}
        type="checkbox"
        value={value}
      />
      <label
        htmlFor={uid}
        className={className}
        {...rest}
      >
        {children}
      </label>
    </>
  );
};
