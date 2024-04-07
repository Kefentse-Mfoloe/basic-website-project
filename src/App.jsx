import { useState } from 'react';
import CoreConepts from './components/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';
import Header  from './components/Header/Header.jsx';
import TabButton from './components/TabButton.jsx';
import TabContent from './components/TabContent.jsx';

function App() {
  const [selectedOption, setSelectedOption] = useState('');
  
  function handleClick(selectedButton) {
    setSelectedOption(selectedButton);
  }

  return (
    <>
      <Header/>
      <main>
        <CoreConepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
