import React from 'react';

import classNames from '../helpers/classNames';

const TaskWindow = ({
  icon,
  title,
  active,
  setMinimized,
}) => {
  console.log(icon, title, active);
  return (
    <div
      className={classNames(
        'task-window',
        active && 'active'
      )}
    >
      {icon}
      {title}
    </div>
  );
};

export default ({ windowList }) => {
  return (
    <div className="task-bar">
      {windowList.map(w => <TaskWindow key={w.uid} {...w} />)}
    </div>
  )
};
