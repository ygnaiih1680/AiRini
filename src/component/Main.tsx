import React, {Component} from 'react'
import WindowOperationButtons from "./WindowOperationButtons"
import SearchEngine from "./SearchEngine"
import Subtitle from "./Subtitle"
import "../style/Main.css"
import {RootState} from "../store/rootStore"
import {connect} from "react-redux"

const mapStateToProps = (state: RootState) => ({mode: state.view.mode})
type PropType = ReturnType<typeof mapStateToProps>

const FADE_IN = "fade-in" as const,
    FADE_OUT = "fade-out" as const,
    NONE = "none" as const,
    COVER = "cover" as const,
    CONTENT = "content" as const

interface StateType {
    fade: typeof FADE_IN
        | typeof FADE_OUT
        | typeof NONE
}

class Main extends Component<PropType, StateType> {
    constructor(props: PropType) {
        super(props);
        Main.modeExtractor = Main.modeExtractor.bind(this)
        Main.modeReverser = Main.modeReverser.bind(this)
        this.setFade = this.setFade.bind(this)
        this.state = {fade: NONE}
    }

    private static modeExtractor(origin: string) {
        const result = origin.substring(9).toLowerCase()
        if (result === COVER || result === CONTENT) return result
        else return COVER
    }

    private static modeReverser(mode: typeof COVER | typeof CONTENT) {
        switch (mode) {
            case COVER:
                return CONTENT
            case CONTENT:
            default:
                return COVER
        }
    }

    private setFade(fade: typeof FADE_IN | typeof FADE_OUT | typeof NONE) {this.setState({fade})}

    componentDidUpdate(prevProps: PropType) {
        if (this.props.mode === prevProps.mode) return
        const prevMode = Main.modeExtractor(prevProps.mode), nextMode = Main.modeReverser(prevMode)
        window.setTimeout(() => {
            document.querySelector("#root")?.classList.replace(prevMode, nextMode)
            this.setFade(FADE_OUT)
            window.setTimeout(() => {this.setFade(NONE)}, 450)
        }, 450)
        this.setFade(FADE_IN)
    }

    render() {
        return (
            <div id="main" className={`${Main.modeExtractor(this.props.mode)} ${this.state.fade}`}>
                <WindowOperationButtons/>
                <SearchEngine placeholder="WEB Developer AiRini"/>
                <Subtitle/>
            </div>
        )
    }
}

export default connect(mapStateToProps)(Main)
