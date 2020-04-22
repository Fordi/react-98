import React from 'react';

import useUid from '../helpers/useUid';

const Radio = ({
  id,
  children,
  disabled,
  name,
  value,
  className,
  onChange,
  checked,
  ...rest
}) => {
  const uid = useUid(id);
  return (
    <>
      <input
        checked={checked}
        className={className}
        disabled={!!disabled}
        id={uid}
        name={name}
        type="radio"
        value={value}
        onChange={(e) => {
          return onChange instanceof Function ? onChange(e) : undefined;
        }}
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

export default ({
  name: optName,
  value: groupValue,
  onChange,
  ...parentProps
}) => ({ value, children, ...props }) => {
  const name = useUid(optName);
  return (
    <Radio
      {...parentProps}
      {...props}
      name={name}
      value={value}
      onChange={onChange}
      checked={groupValue === value}
    >
      {children}
    </Radio>
  );
};
