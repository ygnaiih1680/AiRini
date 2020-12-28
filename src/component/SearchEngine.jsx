import React, {Component} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSearch} from "@fortawesome/free-solid-svg-icons"
import '../style/SearchEngine.css'

class SearchEngine extends Component {
    constructor(props) {
        super(props)
        const {message} = props
        this.state = {
            message,
            cursor: {
                focused: false,
                id: null
            }
        }
    }

    componentDidMount() {
        const searchInput = document.querySelector("#search-text")
        const {message} = this.state
        let idx = 0
        const intervalID = setInterval(() => {
            searchInput.textContent += message[idx++]
            if (idx === message.length) clearInterval(intervalID)
        }, 80)
    }

    moveCursor(evt) {
        const {code} = evt
        console.log(code)
        // switch (code) {
        //     case 37:
        // }
    }

    toggle() {
        console.log(document.activeElement)
        const {cursor: {focused, id}, ...rest} = this.state
        if (!focused) {
            const intervalId = setInterval(() => {
                document.querySelector("#cursor").classList.toggle("on")
            }, 500)
            this.setState({
                ...rest,
                cursor: {
                    focused: true,
                    id: intervalId
                }
            })
        } else {
            clearInterval(id)
            this.setState({
                ...rest,
                cursor: {
                    focused: false,
                    id: null
                }
            })
        }
    }

    render() {
        return (
            <div id="search-engine">
                <div id="icon-block"><FontAwesomeIcon icon={faSearch} color="#615F5F" size="lg"/></div>
                <div id="search-block" onClick={this.toggle.bind(this)} onKeyPress={this.moveCursor}>
                    <span id="search-text" onClick={this.toggle.bind(this)}/>
                    <span id="cursor"/>
                </div>
            </div>
        )
    }
}

export default SearchEngine