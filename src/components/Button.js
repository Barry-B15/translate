import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {

    renderSubmit(value) {
        return(
            value === 'english' ? 'Submit' 
                    : (value === 'dutch' ? 'Voorleggen' 
                    : 'Sanka Suru')
            );
    }
    // Create a new helper
    renderButton(color) {
        return(
            // move the btn here
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>
                    {(value) => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        )
    }

    render() {
        return ( 
            // wrap the btn with the Consumer
            <ColorContext.Consumer>
            {/* The only child of the Consumer is a func, create one and move the btn block into it */}
                {color => this.renderButton(color)
                    // Move the btn to the helper and call the helper method here
                    // refactor this to get the color value
                    // <button className = {`ui button ${color}`}>
                    //     <LanguageContext.Consumer>
                    //         {(value) => this.renderSubmit(value)}
                    //     </LanguageContext.Consumer>
                    // </button>
                }
            </ColorContext.Consumer> 
        );
    }
}
export default Button;