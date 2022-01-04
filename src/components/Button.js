import React from 'react';
import LanguageContext from '../contexts/LanguageContext';


class Button extends React.Component {
    // get the contextType
    static contextType = LanguageContext;

    render() {
        // console log the context
        console.log(this.context)
        return ( 
            <div className = 'ui button primary' >
                Submit 
            </div>
        );
    }
}
export default Button;