import React, {
  useState,
  StrictMode,
} from "react";
import ReactDOM from "react-dom";

import './98.css';
import Button from './component/Button';
import FieldRow from './component/FieldRow';
import Checkbox from './component/Checkbox';
import radioGroup from './component/radioGroup';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [enabled, setEnabled] = useState(true);
  const [swapped, setSwapped] = useState('no');
  const Swapped = radioGroup({
    disabled: !enabled,
    value: swapped,
    onChange: (e) => {
      setSwapped(e.target.value);
    }
  });

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
        <FieldRow>
          <Checkbox
            checked={enabled}
            onChange={(e) => setEnabled(e.target.checked)}
          >
            Enabled
          </Checkbox>
        </FieldRow>
        <label>Swap behavior?</label>
        <FieldRow>
          <Swapped value="yes">Yes</Swapped>
          <Swapped value="no">No</Swapped>
        </FieldRow>
        <FieldRow justify="center">
          <Button disabled={!enabled} onClick={() => setCount(count + (swapped === 'yes' ? -1 : 1))}>+</Button>
          <Button disabled={!enabled} onClick={() => setCount(count - (swapped === 'yes' ? -1 : 1))}>-</Button>
          <Button disabled={!enabled} onClick={() => setCount(0)}>Reset</Button>
        </FieldRow>
      </div>
    </div>
  );
};

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
  document.getElementById('root')
);
