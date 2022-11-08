import React from 'react';
import ReactDOM from 'react-dom/client';
import { useInput } from './hooks/useInput';
import { useTabs } from './hooks/useTabs';
import { useTitle } from './hooks/useTitle';
import { useClick } from './hooks/useClick';
import { useConfirm } from './hooks/useConfirm';
import { usePreventLeave } from './hooks/usePreventLeave';
import { useBeforeLeave } from './hooks/useBeforeLeave';

const App = () => {
  const begForLife = () => console.log('Don t Leave!!!');
  useBeforeLeave(begForLife);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
