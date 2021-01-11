const COVER = "viewMode/COVER" as const
const CONTENT = "viewMode/CONTENT" as const

export const coverMode = () => ({type: COVER})
export const contentMode = () => ({type: CONTENT})

type ViewModeType =
    | ReturnType<typeof coverMode>
    | ReturnType<typeof contentMode>

interface ViewMode {mode: typeof COVER | typeof CONTENT}

const initialMode: ViewMode = {mode: COVER}

const viewModeChanger = (state: ViewMode = initialMode, viewMode: ViewModeType) => {
    switch (viewMode.type) {
        case COVER: return {mode: typeof COVER}
        case CONTENT: return {mode: typeof CONTENT}
        default: return state
    }
}

export default viewModeChanger