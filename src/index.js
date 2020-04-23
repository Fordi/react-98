import './98.css';
import './index.css';

import React, {
  useState,
  StrictMode,
} from "react";

import ReactDOM from "react-dom";


import Button from './component/Button';
import FieldSet from './component/FieldSet';
import FieldRow from './component/FieldRow';
import Checkbox from './component/Checkbox';
import Window from './component/Window';
import Desktop from './component/Desktop';
import radioGroup from './component/radioGroup';

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [enabled, setEnabled] = useState(true);
  const [swapped, setSwapped] = useState('no');
  const [dialogs, setDialogs] = useState([]);
  const Swapped = radioGroup({
    disabled: !enabled,
    value: swapped,
    onChange: (e) => {
      setSwapped(e.target.value);
    }
  });

  return (
    <StrictMode>
      <Button
        style={{ position: 'absolute', top: 0, left: 0 }}
        onClick={() => setDialogs([...dialogs, Math.random()])}
      >
        Add dialog
      </Button>
      <Desktop>
        {dialogs.map(d => (
          <Window title={`Counter ${d}`} key={d} onClose={() => setDialogs(dialogs.filter((dlg) => dlg !== d))}>
            <p style={{ textAlign: "center" }}>Current count: {count}</p>
            <FieldRow>
              <Checkbox
                label="Enabled"
                checked={enabled}
                onChange={(e) => setEnabled(e.target.checked)}
              />
            </FieldRow>
            <FieldSet label="Swap behavior?">
              <FieldRow><Swapped value="yes" label="Yes" /></FieldRow>
              <FieldRow><Swapped value="no" label="No" /></FieldRow>
            </FieldSet>
            <FieldRow justify="center">
              <Button disabled={!enabled} onClick={() => setCount(count + (swapped === 'yes' ? -1 : 1))}>+</Button>
              <Button disabled={!enabled} onClick={() => setCount(count - (swapped === 'yes' ? -1 : 1))}>-</Button>
              <Button disabled={!enabled} onClick={() => setCount(0)}>Reset</Button>
            </FieldRow>
          </Window>
        ))}
      </Desktop>
    </StrictMode>
  );
};

ReactDOM.render(
  <CounterApp />,
  document.getElementById('root')
);
