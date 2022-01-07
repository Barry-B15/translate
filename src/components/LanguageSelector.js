
import React from "react";
import LanguageContext from '../contexts/LanguageContext'; 

class LanguageSelector extends React.Component {
    // hook up the context type
    static contextType = LanguageContext;

    render() {
        // console log the data from the Store
        console.log(this.context);

        return ( 
            <div>
                Select a Language:
                <i className="flag us" onClick={() => this.context.onLanguageChange('english')} />
                <i className="flag nl" onClick={() => this.context.onLanguageChange('dutch')} />
                <i className="flag jp" onClick={() => this.context.onLanguageChange('japanese')} />
            </div>
        );
    }
}
export default LanguageSelector;