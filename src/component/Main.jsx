import React, {Component} from 'react'
import SearchEngine from "./SearchEngine";
import "../style/Main.css"

class Main extends Component {
    render() {
        return(
            <div id="main">
                <SearchEngine message={`WEB Developer AiRini`}/>
            </div>
        )
    }
}

export default Main
