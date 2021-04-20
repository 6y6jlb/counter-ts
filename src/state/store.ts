import {combineReducers, createStore} from "redux";
import reducer, {
    setCollapsedToValueAC,
    setDisplayStringToValueAC,
    setErrorAC,
    setNewMaxValueAC,
    setNewStartValueAC,
    setNewValueAC
} from "./counterReducer";
import {loadState, saveState} from "../utils/localStorage";

export type ActionTypes =
    | ReturnType<typeof setNewValueAC>
    | ReturnType<typeof setNewStartValueAC>
    | ReturnType<typeof setNewMaxValueAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setCollapsedToValueAC>
    | ReturnType<typeof setDisplayStringToValueAC>


const rootReducers = combineReducers ( {reducer} );

type RootType = typeof rootReducers
export type AppRootType = ReturnType<RootType>


let store = createStore ( rootReducers, loadState(), (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__ () )

store.subscribe ( () => (
   saveState(store.getState())
) )


export default store;


