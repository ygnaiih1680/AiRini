import React, {Component} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faWindowClose, faWindowMaximize, faWindowMinimize} from "@fortawesome/free-regular-svg-icons"
import "../style/WindowOperationButton.css"
import {placidBlue} from "../color.json"
import {Link} from "react-router-dom";

const buttons = {
    minimize: faWindowMinimize,
    maximize: faWindowMaximize,
    close: faWindowClose
}

const OperationButton = ({type, icon}) => (
    <Link to="/content" id={type} className="operation">
        <FontAwesomeIcon icon={icon} color={placidBlue} size="sm"/>
    </Link>
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