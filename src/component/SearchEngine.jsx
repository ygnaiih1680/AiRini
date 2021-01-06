import React, {Component} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTerminal} from "@fortawesome/free-solid-svg-icons"
import '../style/SearchEngine.css'
import {placidBlue} from "../color.json"

class SearchEngine extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: props.placeholder,
            cursor: {
                pos: 1,
                on: false,
                id: null
            }
        }
    }

    componentDidMount() {
        const searchText = document.querySelector("#search-text")
        let idx = 0
        const {text} = this.state
        const {length} = this.state.text
        const intervalID = setInterval(() => {
            const {value} = searchText
            const newText = value + text[idx++]
            const newState = {...this.state}
            searchText.value = newText
            newState.cursor.pos = idx / 2 + 1
            this.setState(newState)
            if (idx === length) clearInterval(intervalID)
        }, 100)
    }

    moveCursor(evt) {
        const {target: {selectionStart}} = evt
        const {text: {length}} = this.state
        const newState = {...this.state}
        const cursor = document.querySelector("#caret")
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

    caretOn() {
        const cursor = document.querySelector("#caret")
        cursor.classList.add("on")
        const intervalId = setInterval(() => {
            cursor.classList.toggle("on")
        }, 500)
        const newState = {...this.state}
        newState.cursor.on = true
        newState.cursor.id = intervalId
        this.setState(newState)
    }

    caretOff() {
        const cursor = document.querySelector("#caret")
        cursor.classList.remove("on")
        clearInterval(this.state.cursor.id)
        const newState = {...this.state}
        newState.cursor.on = false
        newState.cursor.id = null
        this.setState(newState)
    }

    render() {
        //TODO: Add drag action, text overflow
        /* TODO: 2021/01/05 change caret */
        return (
            <div id="search-engine">
                <div id="shadow"/>
                <div style={{width: "100%", display: "grid", gridTemplateColumns: "6rem 1fr"}}>
                    <div id="icon-block"><FontAwesomeIcon icon={faTerminal} color={placidBlue} size="2x"/></div>
                    <div id="search-block">
                        <input type="search" id="search-text"
                               onKeyUp={this.moveCursor.bind(this)}
                               onClick={this.moveCursor.bind(this)}
                               onInput={this.inputText.bind(this)}
                               onFocus={this.caretOn.bind(this)}
                               onBlur={this.caretOff.bind(this)}
                               autoComplete="off" spellCheck={false}/>
                        <span id="caret"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchEngine