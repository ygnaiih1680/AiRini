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

class WindowOperationButtons extends Component<PropType, View> {
    changeToCover
    changeToContent

    constructor(props: PropType) {
        super(props);
        console.log(props)
        this.state = {mode: props.mode}
        this.changeToCover = props.changeToCover
        this.changeToContent = props.changeToContent
    }

    modeSwitcher() {
        switch (this.state.mode) {
            case COVER: break
        }
    }

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

export default connect(mapStateToProps, mapDispatchToProps)(WindowOperationButtons)