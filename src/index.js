import React from 'react';
import ReactDOM from 'react-dom/client';
import { useScroll } from './hooks/useScroll';

const App = () => {
  const { y } = useScroll();
  return (
    <div style={{ height: '1000vh' }}>
      <h1 style={{ position: 'fixed', color: y > 100 ? 'red' : 'blue' }}>
        Hello
      </h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
