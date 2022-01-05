import React from "react";
import UserCreate from "./UserCreate";

class App extends React.Component {
    //1 set the state with englis as default lang
    state = { language: 'english'};

    //4. def onLangauge change
    onLanguageChange = language => {
        this.setState({ language }) //shorthand since laguage : language are the same
    }
    render() {
        return (
            <div className="ui container"> 
                <div>
                    Select a Language:
                    {/*2 get the flag icons
                    3. add listeners to the flags */}
                    <i className="flag us" onClick={() => this.onLanguageChange('English')} />
                    <i className="flag nl" onClick={() => this.onLanguageChange('Dutch')} />
                    <i className="flag jp" onClick={() => this.onLanguageChange('Japanese')} />
                </div>
                {/* call the onlanguage change method to toggle the langs */}
                {/* {this.state.language} */}
                {/* Replace this.state with UserCreate */}
                <UserCreate />
            </div>
        );
    }
}

export default App;