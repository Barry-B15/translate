import React from 'react';
import LanguageContext from '../contexts/LanguageContext';


class Button extends React.Component {
    // 1. remove the contextType, its for default
    // static contextType = LanguageContext;
// Create a helper class for the func
        renderSubmit(value) {
            return(
                value === 'english' ? 'Submit' 
                    : (value === 'dutch' ? 'Voorleggen' 
                    : 'Sanka Suru')
            );
        }
    
    render() {
        // remove the logic
        // 3rd lang : mine?
        // const text = this.context === 'english' ? 'Submit' 
        // : (this.context === 'dutch' ?  'Voorleggen' : 'Sanka Suru' );

        return ( 
            <button className = 'ui button primary'>
             
                {/* { text } */}
                {/* Replace the {text} with a Consumer wrapped around a func */}
                <LanguageContext.Consumer>
                    {(value) => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        );
    }
}
export default Button;