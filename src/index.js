import React from 'react';
import ReactDOM from 'react-dom/client';
import { useInput } from './hooks/useInput';
import { useTabs } from './hooks/useTabs';
import { useTitle } from './hooks/useTitle';
import { useClick } from './hooks/useClick';
import { useConfirm } from './hooks/useConfirm';

const App = () => {
  const deleteWord = () => console.log('Delete word...');
  const abort = () => console.log('Aborted');
  const confirmDelete = useConfirm('Are you sure?', deleteWord, abort);
  return (
    <div>
      <button onClick={confirmDelete}>Delete word</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
