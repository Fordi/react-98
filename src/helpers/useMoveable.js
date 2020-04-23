import { useState, useEffect, useCallback } from 'react';

const { isNaN } = Number;

const findRoot = node => {
  let localRoot = node.ownerDocument.documentElement;
  if (localRoot.nodeName === 'HTML') {
    return localRoot.getElementsByTagName('body')[0];
  }
  return localRoot;
};

export default ({
  x: initX,
  y: initY,
}) => {
  const [{ x, y }, setPos] = useState({ x: initX, y: initY });
  const [root, setRoot] = useState(null);
  const container = useCallback((node) => {
    if (!node) return;
    let localRoot = root;
    if (!localRoot) {
      localRoot = findRoot(node);
      setRoot(localRoot);
    }
    if (isNaN(x) || isNaN(y)) {
      const x = initX || (localRoot.clientWidth - node.clientWidth) / 2;
      const y = initY || (localRoot.clientHeight - node.clientHeight) / 2;
      setPos({ x, y });
    }
  }, [root, initX, initY, x, y]);
  const [{ x: mouseX, y: mouseY, button: mouseButton }, setMouse] = useState({});
  const [{ x: originX, y: originY }, setOrigin] = useState({});
  const [{ x: anchorX, y: anchorY, button: anchorButton }, setAnchor] = useState({});
  const [listeners, setListeners] = useState({});


  useEffect(() => {
    if (mouseButton !== undefined && mouseButton !== anchorButton) {
      mouseup();
      return;
    }
    const localX = originX + mouseX - anchorX;
    const localY = originY + mouseY - anchorY;
    if (!isNaN(localX) && !isNaN(localY)) {
      setPos({ x: localX, y: localY });
    }
  }, [originX, mouseX, anchorX, originY, mouseY, anchorY, mouseButton, anchorButton]);

  useEffect(() => {
    if (!root) { return; }
    Object.keys(listeners).forEach((eventName) => {
      root.addEventListener(eventName, listeners[eventName], false);
    });
    return () => {
      Object.keys(listeners).forEach((eventName) => {
        root.removeEventListener(eventName, listeners[eventName], false);
      });
    };
  }, [root, listeners]);

  const mousemove = (e) => {
    setMouse({ x: e.pageX, y: e.pageY, button: e.buttons });
  };
  const mouseup = (e) => {
    setListeners({});
    setOrigin({});
    setRoot(null);
    setAnchor({});
  };
  const onMoveStart = (e) => {
    e.preventDefault();
    if (!root) {
      setRoot(findRoot(e.target));
    }
    setOrigin({ x, y });
    setMouse({ x: e.pageX, y: e.pageY, button: e.buttons });
    setAnchor({ x: e.pageX, y: e.pageY, button: e.buttons });
    setListeners({ mousemove, mouseup });
    return false;
  };
  return {
    x,
    y,
    onMoveStart,
    container,
  };
};
