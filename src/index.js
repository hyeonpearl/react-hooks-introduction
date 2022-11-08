import React from 'react';
import ReactDOM from 'react-dom/client';
import { useInput } from './hooks/useInput';
import { useTabs } from './hooks/useTabs';
import { useTitle } from './hooks/useTitle';
import { useClick } from './hooks/useClick';
import { useConfirm } from './hooks/useConfirm';
import { usePreventLeave } from './hooks/usePreventLeave';

const App = () => {
  const { enablePrevent, disablePrevent } = usePreventLeave();
  return (
    <div>
      <button onClick={enablePrevent}>Protect</button>
      <button onClick={disablePrevent}>Unprotect</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
