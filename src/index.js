import React from 'react';
import ReactDOM from 'react-dom/client';
import { useNotification } from './hooks/useNotification';

const App = () => {
  const triggerNotice = useNotification('Hello!!!!!', {
    body: 'nice to meet you!!!',
  });
  return (
    <div>
      <button onClick={triggerNotice}>
        <h1>Hello</h1>
      </button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
