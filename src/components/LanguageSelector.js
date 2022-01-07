
import React from "react";

class LanguageSelector extends React.Component {
    render() {
        return ( 
            <div>
                Select a Language:
                <i className="flag us" onClick={() => this.props.onLanguageChange('english')} />
                <i className="flag nl" onClick={() => this.props.onLanguageChange('dutch')} />
                <i className="flag jp" onClick={() => this.props.onLanguageChange('japanese')} />
            </div>
        );
    }
}
export default LanguageSelector;