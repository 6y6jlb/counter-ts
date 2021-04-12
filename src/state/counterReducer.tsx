import {ActionTypes} from "./store";


export enum REDUCER_CONST {
    SET_NEW_VALUE = 'SET_NEW_VALUE',
    SET_NEW_START_VALUE = 'SET_NEW_START_VALUE',
    SET_NEW_MAX_VALUE = 'SET_NEW_MAX_VALUE',
    SET_COLLAPSED_TO_VALUE = 'SET_COLLAPSED_TO_VALUE',
    SET_ERROR = 'SET_ERROR',
    SET_DISPLAY_STRING_TO_VALUE = 'SET_DISPLAY_STRING_TO_VALUE',

}

type SetNewValueActionType = { type: typeof REDUCER_CONST.SET_NEW_VALUE, value: number }
type SetNewStartValueActionType = { type: typeof REDUCER_CONST.SET_NEW_START_VALUE, value: number }
type SetNewMaxValueActionType = { type: typeof REDUCER_CONST.SET_NEW_MAX_VALUE, value: number }
type SetCollapsedActionType = { type: typeof REDUCER_CONST.SET_COLLAPSED_TO_VALUE, value: boolean }
type SetErrorActionType = { type: typeof REDUCER_CONST.SET_ERROR, value: boolean }
type SetDisplayStringToValueActionType = { type: typeof REDUCER_CONST.SET_DISPLAY_STRING_TO_VALUE, value: string | null }


export function setNewValueAC(value: number): SetNewValueActionType {
    return {type: REDUCER_CONST.SET_NEW_VALUE, value} as const
}

export function setNewStartValueAC(value: number): SetNewStartValueActionType {
    return {type: REDUCER_CONST.SET_NEW_START_VALUE, value} as const
}

export function setNewMaxValueAC(value: number): SetNewMaxValueActionType {
    return {type: REDUCER_CONST.SET_NEW_MAX_VALUE, value} as const
}

export function setErrorAC(value: boolean): SetErrorActionType {
    return {type: REDUCER_CONST.SET_ERROR, value} as const
}

export function setCollapsedToValueAC(value: boolean): SetCollapsedActionType {
    return {type: REDUCER_CONST.SET_COLLAPSED_TO_VALUE, value} as const
}

export function setDisplayStringToValueAC(value: string | null): SetDisplayStringToValueActionType {
    return {type: REDUCER_CONST.SET_DISPLAY_STRING_TO_VALUE, value} as const
}

const initialState = {
    count: 0,
    startValue: 0,
    maxValue: 1,
    error: false,
    collapsed: true,
    displayString: null as null | string
}

export type CounterStateType = typeof initialState

function reducer(state = initialState, action: ActionTypes): CounterStateType {

    switch (action.type) {
        case REDUCER_CONST.SET_NEW_VALUE:
            return {...state, count: action.value}
        case REDUCER_CONST.SET_NEW_START_VALUE:
            return {...state, startValue: action.value}
        case REDUCER_CONST.SET_NEW_MAX_VALUE:
            return {...state, maxValue: action.value}
        case REDUCER_CONST.SET_ERROR:
            return {...state, error: action.value}
        case REDUCER_CONST.SET_COLLAPSED_TO_VALUE:
            return {...state, collapsed: action.value}
        case REDUCER_CONST.SET_DISPLAY_STRING_TO_VALUE:
            return {...state, displayString: action.value}
        default:
            return state
    }
}

export default reducer;