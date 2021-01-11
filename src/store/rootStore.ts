import {combineReducers} from "redux"
import viewModeChanger from "./viewModeChanger";

const reducers = combineReducers({
    viewModeChanger,
})

export default reducers
export type ReducerType = ReturnType<typeof reducers>