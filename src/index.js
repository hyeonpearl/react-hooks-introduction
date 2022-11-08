import React from 'react';
import ReactDOM from 'react-dom/client';
import { useInput } from './hooks/useInput';
import { useTabs } from './hooks/useTabs';
import { useTitle } from './hooks/useTitle';

const App = () => {
  const titleUpdater = useTitle('Change Title!');
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
