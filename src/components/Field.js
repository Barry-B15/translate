import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
    // get the contextType
    static contextType = LanguageContext;

    render() {
        // add logic to change the lang field
        // const text = this.context === 'english' ? 'Name' : 'Naam';
        //original from video

        // 3rd lang : mine
        const text = this.context.language === 'english' ? 'Name' 
            : (this.context.language === 'dutch' ? 'Naam' : '名前 | Namae');


        return ( 
            <div className = 'ui field' > 
                { /* <label> Name </label>  */ } 
                <label > { text } </label>  
                <input / >
            </div>
        );
    }
}

export default Field;