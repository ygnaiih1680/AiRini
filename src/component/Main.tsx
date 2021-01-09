import React, {Component} from 'react'
import WindowOperationButtons from "./WindowOperationButtons"
import SearchEngine from "./SearchEngine"
import Subtitle from "./Subtitle"
import "../style/Main.css"

class Main extends Component {
    render() {
        return (
            <div id="main" className="cover">
                <WindowOperationButtons/>
                <SearchEngine placeholder="WEB Developer AiRini"/>
                <Subtitle/>
            </div>
        )
    }
}

export default Main
