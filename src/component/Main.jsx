import React, {Component} from 'react'
import SearchEngine from "./SearchEngine";
import "../style/Main.css"

class Main extends Component {
    render() {
        return (
            <div id="main">
                <div style={{width: "75%", position: "relative"}}>
                    <SearchEngine message="WEB Developer AiRini"/>
                </div>
            </div>
        )
    }
}

export default Main
