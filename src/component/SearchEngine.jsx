import React, {Component} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSearch} from "@fortawesome/free-solid-svg-icons"
import '../style/SearchEngine.css'

class SearchEngine extends Component {
    initialMessage

    constructor(props) {
        super(props)
        this.initialMessage = props.message
        this.state = {
            text: "",
            cursor: {
                pos: 1,
                on: false,
                id: null
            }
        }
    }

    componentDidMount() {
        const {length} = this.initialMessage
        const backEndEngine = document.querySelector("#back-end-engine")
        // backEndEngine.focus()
        let idx = 0
        if (this.initialMessage.length !== 0) {
            const intervalID = setInterval(() => {
                const {text} = this.state
                const newText = text + this.initialMessage[idx++]
                const newState = {...this.state}
                backEndEngine.value = newText
                newState.cursor.pos = idx / 2 + 1
                newState.text = newText
                this.setState(newState)
                if (idx === length) clearInterval(intervalID)
            }, 150)
        }
    }

    moveCursor(evt) {
        const {target: {selectionStart}} = evt
        const {text: {length}} = this.state
        const newState = {...this.state}
        const cursor = document.querySelector("#cursor")
        cursor.classList.add("on")
        clearInterval(this.state.cursor.id)
        const intervalId = setInterval(() => {
            cursor.classList.toggle("on")
        }, 500)
        newState.cursor.pos = selectionStart - length / 2 + 1
        newState.cursor.id = intervalId
        this.setState(newState)
    }

    inputText(evt) {
        const {target: {value, selectionStart}} = evt
        const newState = {...this.state}
        newState.cursor.pos = selectionStart - value.length / 2 + 1
        newState.text = value
        this.setState(newState)
    }

    cursorOn() {
        const cursor = document.querySelector("#cursor")
        cursor.classList.add("on")
        const intervalId = setInterval(() => {
            cursor.classList.toggle("on")
        }, 500)
        const newState = {...this.state}
        newState.cursor.on = true
        newState.cursor.id = intervalId
        this.setState(newState)
    }

    cursorOff() {
        const cursor = document.querySelector("#cursor")
        cursor.classList.remove("on")
        clearInterval(this.state.cursor.id)
        const newState = {...this.state}
        newState.cursor.on = false
        newState.cursor.id = null
        this.setState(newState)
    }

    render() {
        return (
            <div id="search-engine">
                <div id="icon-block"><FontAwesomeIcon icon={faSearch} color="#615F5F" size="2x"/></div>
                <div id="search-block">
                    <span id="search-text">{this.state.text}</span>
                    <input type="search" id="back-end-engine" className="hidden"
                           onKeyUp={this.moveCursor.bind(this)}
                           onClick={this.moveCursor.bind(this)}
                           onInput={this.inputText.bind(this)}
                           onFocus={this.cursorOn.bind(this)}
                           onBlur={this.cursorOff.bind(this)}
                           autoComplete="off"/>
                    <span id="cursor" style={{left: `${2.5 * this.state.cursor.pos - 0.9}ch`}}/>
                </div>
            </div>
        )
    }
}

export default SearchEngine