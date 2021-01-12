import React, {Component} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faWindowClose, faWindowMaximize, faWindowMinimize, IconDefinition} from "@fortawesome/free-regular-svg-icons"
import "../style/WindowOperationButton.css"
import {placidBlue} from "../color.json"
import {coverMode, contentMode, ActionType as ViewModeActionType, View, CONTENT, COVER} from "../store/viewModeChanger"
import {RootState} from '../store/rootStore'
import {Dispatch} from "redux"
import {connect} from "react-redux"

const buttons = {
    minimize: faWindowMinimize,
    maximize: faWindowMaximize,
    close: faWindowClose
}

interface ButtonProperties {
    type: string
    icon: IconDefinition
}

const mapStateToProps = (state: RootState) => ({mode: state.view.mode})


const mapDispatchToProps = (dispatch: Dispatch<ViewModeActionType>) => ({
    changeToCover: () => dispatch(coverMode()),
    changeToContent: () => dispatch(contentMode())
})

type PropType = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>

const OperationButton = ({type, icon}: ButtonProperties) => (
    <div id={type} className="operation">
        <FontAwesomeIcon icon={icon} color={placidBlue} size="sm"/>
    </div>
)

class WindowOperationButtons extends Component<PropType> {
    constructor(props: PropType) {
        super(props);
        this.modeSwitcher = this.modeSwitcher.bind(this)
    }

    modeSwitcher() {
        const {mode, changeToCover, changeToContent} = this.props
        switch (mode) {
            case COVER: changeToContent(); break
            case CONTENT: changeToCover(); break
            default: break
        }
    }

    render() {
        return (
            <div id="window-operation-button" onClick={this.modeSwitcher}>
                {
                    Object.entries(buttons).map(([type, icon], idx) => (
                        <OperationButton key={idx} type={type} icon={icon}/>
                    ))
                }
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WindowOperationButtons)