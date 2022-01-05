import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
    // get the contextType
    static contextType = LanguageContext;

    render() {
        // add logic to change the lang field
        const text = this.context === 'english' ? 'Name' : 'Naam';
        
        // Following not selecting the 3rd lang why?
        // const text = this.context === 'english' ? 'Name' : 'japanese' ? 'Namae' : 'Naam' ;

        // const text = this.context === 
        // 'english' ? 'Name' 
        // : 'dutch' ? 'Naam'
        // : 'Namae';

        return ( 
            <div className = 'ui field'>
                {/* <label> Name </label>  */}
                <label> { text } </label> 
                <input / >
            </div>
        );
    }
}

export default Field;