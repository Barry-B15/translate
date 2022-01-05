import React from 'react';
import LanguageContext from '../contexts/LanguageContext';


class Button extends React.Component {
    // get the contextType
    static contextType = LanguageContext;

    render() {
        // console log the context
        // console.log(this.context)
        // replace the console log with logic for lang change on the btn
        // const text = this.context === 'english' ? 'Submit' : 'Voorleggen'; //original from video

        // 3rd lang : mine?
        const text = this.context === 'english' ? 'Submit' 
        : (this.context === 'dutch' ?  'Voorleggen' : 'Sanka Suru' );

        return ( 
            <div className = 'ui button primary'>
                {/* Submit  */}
                { text }
            </div>
        );
    }
}
export default Button;