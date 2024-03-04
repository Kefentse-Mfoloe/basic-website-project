import { useState } from 'react';
import { CORE_CONCEPTS, EXAMPLES } from './data.js';
import CoreConcept from './components/CoreConcept.jsx';
import Header  from './components/Header/Header.jsx';
import TabButton from './components/TabButton.jsx';
import TabContent from './components/TabContent.jsx';

function App() {
  const [selectedOption, setSelectedOption] = useState('');
  
  function handleClick(selectedButton) {
    setSelectedOption(selectedButton);
  }

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key={conceptItem.title} {...conceptItem}/>))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton selected={selectedOption === 'components'} onSelect={() => handleClick('components')}>Components</TabButton>
            <TabButton selected={selectedOption === 'jsx'} onSelect={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton selected={selectedOption === 'props'} onSelect={() => handleClick('props')}>Props</TabButton>
            <TabButton selected={selectedOption === 'state'} onSelect={() => handleClick('state')}>State</TabButton>
          </menu>
        </section>
        <TabContent tabContentOption={selectedOption}/>
      </main>
    </div>
  );
}

export default App;
