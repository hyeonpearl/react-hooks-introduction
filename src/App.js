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

export default App;
