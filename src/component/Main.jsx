import React, {Component} from 'react'
import SearchEngine from "./SearchEngine";
import WindowOperationButtons from "./WindowOperationButtons"
import "../style/Main.css"

class Main extends Component {
    render() {
        return (
            <div id="main">
                <div style={{width: "75%", position: "relative", display: "grid", gridTemplateRows: "repeat(3, 1fr)"}}>
                    <WindowOperationButtons/>
                    <SearchEngine message="WEB Developer AiRini"/>
                </div>
            </div>
        )
    }
}

export default Main
