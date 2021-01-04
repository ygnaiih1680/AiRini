import React, {Component} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faWindowMinimize, faWindowMaximize, faWindowClose} from "@fortawesome/free-regular-svg-icons"
import "../style/WindowOperationButton.css"
import color from "../color.json"

const buttons = {
    minimize: faWindowMinimize,
    maximize: faWindowMaximize,
    close: faWindowClose
}

const OperationButton = ({type, icon}) => (
    <div id={type} className="operation">
        <FontAwesomeIcon icon={icon} color={color.illuminating} size="sm"/>
    </div>
)

class WindowOperationButtons extends Component {
    render() {
        return (
            <div id="window-operation-button">
                {
                    Object.entries(buttons).map(([type, icon], idx) => (
                        <OperationButton key={idx} type={type} icon={icon}/>
                    ))
                }
            </div>
        )
    }
}

export default WindowOperationButtons