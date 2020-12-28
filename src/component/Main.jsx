import React, {Component} from 'react'
import SearchEngine from "./SearchEngine";
import "../style/Main.css"

class Main extends Component {
    render() {
        return(
            <div id="main">
                <SearchEngine message={`AiRini's Portfolio`}/>
            </div>
        )
    }
}

export default Main
