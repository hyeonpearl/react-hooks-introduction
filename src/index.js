import React from 'react';
import ReactDOM from 'react-dom/client';
import { useInput } from './hooks/useInput';
import { useTabs } from './hooks/useTabs';

const App = () => {
  const content = [
    {
      tab: 'Section 1',
      content: 'Content of Section 1 ',
    },
    {
      tab: 'Section 2',
      content: 'Content of Section 2 ',
    },
  ];

  const { currentItem, changeItem } = useTabs(0, content);
  return (
    <div>
      {content.map((section, index) => (
        <button onClick={() => changeItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
