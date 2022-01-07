import React from "react";

// export default React.createContext('english');
//1 replace export default with a const, Context must be a cap
const Context = React.createContext('english');


//2. create a store as a new class based compo 
export class LanguageStore extends React.Component {
    //3. define a state 
    state = { language: 'english' };

    // 4. create a callback func for lag change
    onLanguageChange = (language) => {
        this.setState({ language });
    };

    // 5. now render the Context Provider with the selected lang value + the callback value
    render() {
        return ( 
            <Context.Provider value={{...this.state, onLanguageChange } } > 
                { this.props.children } 
            </Context.Provider>
        );
    }

}
export default Context;