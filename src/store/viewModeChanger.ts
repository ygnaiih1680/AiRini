export const COVER = <const>"viewMode/COVER"
export const CONTENT = <const>"viewMode/CONTENT"

export const coverMode = () => ({type: COVER})
export const contentMode = () => ({type: CONTENT})

export type ActionType =
    | ReturnType<typeof coverMode>
    | ReturnType<typeof contentMode>

export interface View {
    mode: typeof COVER | typeof CONTENT
}

const initialMode = {mode: COVER}

const viewModeChanger = (state: View = initialMode, action: ActionType) => {
    const {type: mode} = action
    if (mode === COVER || mode === CONTENT) return {mode}
    else return state
}

export default viewModeChanger