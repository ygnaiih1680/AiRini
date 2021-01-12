export const COVER = "viewMode/COVER" as const
export const CONTENT = "viewMode/CONTENT" as const

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
    return {mode}
}

export default viewModeChanger