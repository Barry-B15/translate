import React from "react";
import UserCreate from "./UserCreate";
import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";

class App extends React.Component {
   
    // state = { language: 'english'};
    
    // onLanguageChange = language => {
    //     this.setState({ language }); 
    // };

    render() {
        return (
            <div className="ui container"> 
            {/* wrap the content with the Language store */}
                <LanguageStore>
                    <LanguageSelector 
                    // onLanguageChange={this.onLanguageChange}
                     />
                    
                    <ColorContext.Provider value="red">
                        {/* remove the old Language context provider */}
                        {/* <LanguageContext.Provider value={this.state.language}> */}
                            <UserCreate />
                        {/* </LanguageContext.Provider> */}
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        );
    }
}

export default App;