import React, {
  useEffect,
} from 'react';

import classNames from '../helpers/classNames';
import useMoveable from '../helpers/useMoveable';
import useUid from '../helpers/useUid';

export default ({
  className,
  title,
  icon,
  onMinimize,
  onMaximize,
  onClose,
  children,
  moveable = true,
  addWindow,
  removeWindow,
  x: initX = NaN,
  y: initY = NaN,
  id,
  ...props
}) => {
  const uid = useUid(id);

  const {
    x,
    y,
    onMoveStart,
    container,
  } = moveable
    ? useMoveable({
      x: initX,
      y: initY,
    })
    : {};

  useEffect(() => {
    const win = {
      title,
      icon,
      active: true,
      uid,
    };
    addWindow && addWindow(win);
  }, [icon, title, uid, addWindow]);

  const remove = React.useRef(removeWindow);
  useEffect(() => {
    remove.current = () => removeWindow({ uid });
  }, [uid, removeWindow]);
  useEffect(() => () => {
    remove.current();
  }, []);

  return (
    <div
      className={classNames(
        'window',
        className,
      )}
      style={{
        position: 'absolute',
        left: x || '',
        top: y || ''
      }}
      ref={container}
      {...props}
    >
      {(title || onMinimize || onMaximize || onClose) && (
        <div className="title-bar" onMouseDown={onMoveStart}>
          {title && (
            <div className="title-bar-text">{title}</div>
          )}
          {(onMinimize || onMaximize || onClose) && (
            <div className="title-bar-controls">
              {onMinimize && <button aria-label="Minimize" onClick={onMinimize}></button>}
              {onMaximize && <button aria-label="Maximize" onClick={onMaximize}></button>}
              {onClose && <button aria-label="Close" onClick={onClose}></button>}
            </div>
          )}
        </div>
      )}
      <div className="window-body">
        {children}
      </div>
    </div>
  );
};
