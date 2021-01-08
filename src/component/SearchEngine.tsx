import React, {Component, FormEvent, KeyboardEvent, MouseEvent} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faTerminal} from "@fortawesome/free-solid-svg-icons"
import '../style/SearchEngine.css'
import {placidBlue} from "../color.json"

interface Cursor {
    pos: number
    on: boolean
    id?: number
}

interface SearchEngine {
    text: string
    cursor: Cursor
}

interface Props {
    placeholder: string
}

const {setInterval, clearInterval} = window

class SearchEngineImpl extends Component<Props, SearchEngine> {
    constructor(props: Props) {
        super(props)
        this.state = {
            text: props.placeholder,
            cursor: {
                pos: 1,
                on: false,
                id: undefined
            }
        }

        this.inputText = this.inputText.bind(this)
        this.moveCursor = this.moveCursor.bind(this)
        this.caretOn = this.caretOn.bind(this)
        this.caretOff = this.caretOff.bind(this)
    }

    componentDidMount() {
        const searchText = document.querySelector("#search-text") as HTMLInputElement
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

    moveCursor(evt: KeyboardEvent<HTMLInputElement> | MouseEvent<HTMLInputElement>) {
        const {currentTarget: {selectionStart}} = evt,
            {text: {length}} = this.state,
            newState = {...this.state},
            cursor = document.querySelector("#caret")
        if (cursor && selectionStart) {
            cursor.classList.add("on")
            clearInterval(this.state.cursor.id)
            const intervalId = setInterval(() => {
                cursor.classList.toggle("on")
            }, 500)
            newState.cursor.pos = selectionStart - length / 2 + 1
            newState.cursor.id = intervalId
            this.setState(newState)
        }
    }

    inputText(evt: FormEvent<HTMLInputElement>) {
        const {currentTarget: {value, selectionStart}} = evt,
            newState = {...this.state}
        if (selectionStart) {
            newState.cursor.pos = selectionStart - value.length / 2 + 1
            newState.text = value
            this.setState(newState)
        }
    }

    caretOn() {
        const cursor = document.querySelector("#caret")
        if (cursor) {
            cursor.classList.add("on")
            const intervalId = setInterval(() => {
                cursor.classList.toggle("on")
            }, 500)
            const newState = {...this.state}
            newState.cursor.on = true
            newState.cursor.id = intervalId
            this.setState(newState)
        }
    }

    caretOff() {
        const cursor = document.querySelector("#caret")
        if (cursor) {
            cursor.classList.remove("on")
            clearInterval(this.state.cursor.id)
            const newState = {...this.state}
            newState.cursor.on = false
            newState.cursor.id = undefined
            this.setState(newState)
        }
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
                               onKeyUp={this.moveCursor}
                               onClick={this.moveCursor}
                               onInput={this.inputText}
                               onFocus={this.caretOn}
                               onBlur={this.caretOff}
                               autoComplete="off" spellCheck={false}/>
                        <span id="caret"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchEngineImpl