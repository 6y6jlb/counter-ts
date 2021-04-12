import { combineReducers, createStore} from "redux";
import reducer, {
    setCollapsedToValueAC, setDisplayStringToValueAC,
    setErrorAC,
    setNewMaxValueAC,
    setNewStartValueAC,
    setNewValueAC
} from "./counterReducer";

export type ActionTypes =
    | ReturnType<typeof setNewValueAC>
    | ReturnType<typeof setNewStartValueAC>
    | ReturnType<typeof setNewMaxValueAC>
    | ReturnType<typeof setErrorAC>
    | ReturnType<typeof setCollapsedToValueAC>
    | ReturnType<typeof setDisplayStringToValueAC>


const rootReducers = combineReducers( {reducer});

let store = createStore(rootReducers,(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__() )

type RootType = typeof rootReducers
export type AppRootType = ReturnType<RootType>

export default store;


