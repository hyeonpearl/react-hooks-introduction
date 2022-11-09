import React from 'react';
import ReactDOM from 'react-dom/client';
import { useFadeIn } from './hooks/useFadeIn';

const App = () => {
  const fadeIn = useFadeIn(1, 2);
  const fadeInP = useFadeIn(5, 10);
  return (
    <div>
      <h1 {...fadeIn}>Hello</h1>
      <p {...fadeInP}>ooooooooooo</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
