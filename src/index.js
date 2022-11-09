import React from 'react';
import ReactDOM from 'react-dom/client';
import { useFullscreen } from './hooks/useFullscreen';

const App = () => {
  const onFulls = isFull => {
    console.log(isFull ? 'Full' : 'Small');
  };
  const { element, triggerFull, exitFull } = useFullscreen(onFulls);
  return (
    <div>
      <div>
        <img
          ref={element}
          src='https://i.ibb.co/R6RwNxx/grape.jpg'
          alt='grape'
          width='250'
        />
        <button onClick={exitFull}>Exit</button>
      </div>
      <button onClick={triggerFull}>Full Screen</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
