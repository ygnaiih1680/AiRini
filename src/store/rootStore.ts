import {combineReducers} from "redux"
import view, {ActionType as ViewModeActionType, View} from "./viewModeChanger";

export interface RootState {
    view: View
}

export type RootAction = ViewModeActionType

const rootReducer = combineReducers<RootState, RootAction>({
    view,
})
export default rootReducer