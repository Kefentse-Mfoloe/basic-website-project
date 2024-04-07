import TabButton from "./TabButton";
import TabContent from "./TabContent";
import { useState } from 'react';
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
    const [selectedOption, setSelectedOption] = useState('');
  
    function handleClick(selectedButton) {
        setSelectedOption(selectedButton);
    }
    
    return (
        <Section title="Examples" id="examples">
            <Tabs
                ButtonsContainer="menu"
                buttons={
                    <>
                        <TabButton isSelected={selectedOption === 'components'} onClick={() => handleClick('components')}>Components</TabButton>
                        <TabButton isSelected={selectedOption === 'jsx'} onClick={() => handleClick('jsx')}>JSX</TabButton>
                        <TabButton isSelected={selectedOption === 'props'} onClick={() => handleClick('props')}>Props</TabButton>
                        <TabButton isSelected={selectedOption === 'state'} onClick={() => handleClick('state')}>State</TabButton>
                    </>
                }>
                <TabContent tabContentOption={selectedOption}/>
            </Tabs>         
        </Section>
    );
}