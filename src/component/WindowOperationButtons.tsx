import React, {Component} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faWindowClose, faWindowMaximize, faWindowMinimize, IconDefinition} from "@fortawesome/free-regular-svg-icons"
import "../style/WindowOperationButton.css"
import {placidBlue} from "../color.json"

const buttons = {
    minimize: faWindowMinimize,
    maximize: faWindowMaximize,
    close: faWindowClose
}

type ButtonProperties = {
    type: string,
    icon: IconDefinition
}

const OperationButton = ({type, icon}: ButtonProperties) => (
    <div id={type} className="operation">
        <FontAwesomeIcon icon={icon} color={placidBlue} size="sm"/>
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