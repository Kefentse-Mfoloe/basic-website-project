import { EXAMPLES } from '../data';

export default function TabContent({tabContentOption}) {
    let content = <p>Please select option</p>

    if(tabContentOption){
        content = 
            <div id="tab-content">
                <h3>{EXAMPLES[tabContentOption].title}</h3>
                <p>{EXAMPLES[tabContentOption].description}</p>
                <pre>
                <code>
                    {EXAMPLES[tabContentOption].code}
                </code>
                </pre>
            </div>
    }
    
    return (
        content
    );
}