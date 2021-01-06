import React, {Component} from 'react'
import WindowOperationButtons from "./WindowOperationButtons"
import SearchEngine from "./SearchEngine"
import Subtitle from "./Subtitle"
import "../style/Cover.css"

class Cover extends Component {
    render() {
        return (
            <div id="cover">
                <WindowOperationButtons/>
                <SearchEngine placeholder="WEB Developer AiRini"/>
                <Subtitle/>
            </div>
        )
    }
}

export default Cover
