import React, {
  useState,
  StrictMode,
} from "react";
import ReactDOM from "react-dom";

import './98.css';
import Button from './component/Button';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="window">
      <div className="title-bar">
        <div className="title-bar-text">Counter</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" />
        </div>
      </div>
      <div className="window-body">
        <p style={{ textAlign: "center" }}>Current count: {count}</p>
        <div className="field-row" style={{ justifyContent: "center" }}>
          <Button onClick={() => setCount(count + 1)}>+</Button>
          <Button onClick={() => setCount(count - 1)}>-</Button>
          <Button onClick={() => setCount(0)}>Reset</Button>
        </div>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div style={{ width: 350 }}>
        <Counter />
      </div>
    </div>
  </StrictMode>,
  rootElement
);
