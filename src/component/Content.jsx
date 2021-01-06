import React, {Component} from 'react';
import Cover from "./Cover";

class Content extends Component {
    render() {
        return (
            <div style={{width: "75%"}}>
                <Cover placeholder="test"/>
            </div>
        );
    }
}

export default Content;