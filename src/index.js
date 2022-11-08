import React from 'react';
import ReactDOM from 'react-dom/client';
import { useInput } from './hooks/useInput';
import { useTabs } from './hooks/useTabs';
import { useTitle } from './hooks/useTitle';
import { useClick } from './hooks/useClick';

const App = () => {
  const sayHello = () => console.log('Helloooooo!!');
  const title = useClick(sayHello);
  return (
    <div>
      <h1 ref={title}>Hello</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
