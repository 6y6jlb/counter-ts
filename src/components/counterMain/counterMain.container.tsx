import {connect} from "react-redux";
import {CounterMain} from "./CounterMain";
import {AppRootType} from "../../state/store";
import {setCollapsedToValueAC, setDisplayStringToValueAC, setErrorAC, setNewValueAC} from "../../state/counterReducer";
import React from "react";

type MapStatePropsType = {
    error: boolean
    count: number
    displayString: string | null
    collapsed: boolean
    maxValue: number
    startValue: number

}

type CounterMainEffectContainerPropsType = {
    error: boolean
    count: number
    displayString: string | null
    collapsed: boolean
    maxValue: number
    startValue: number
    setCollapsedToValueAC: (value:boolean)=>void
    setDisplayStringToValueAC:(value:string|null)=>void
    setNewValueAC:(value:number)=>void
    setErrorAC:(value:boolean)=>void


}

export const CounterMainEffectContainer: React.FC<CounterMainEffectContainerPropsType> = (props) => {
    const disableInc = (props.count >= props.maxValue) || !props.collapsed
    const disableReset = (props.count === props.startValue) || !props.collapsed
    const disableSet = (props.maxValue <= props.startValue || props.startValue < 0)
    const setOnClick = () => {
        if (props.collapsed) {
            props.setCollapsedToValueAC ( false )
            props.setDisplayStringToValueAC ( null )
        } else {
            props.setCollapsedToValueAC ( true )
            props.setDisplayStringToValueAC ( null )
        }
    }
    const resetOnclick = () => {
        props.setNewValueAC ( props.startValue )
        props.setErrorAC ( false )
    }
    const incrementOnclick = () => {
        const newValue = props.count + 1
        if (newValue <= props.maxValue && newValue > 0) {
            props.setNewValueAC ( newValue )
            props.setErrorAC ( false )
            if (newValue >= props.maxValue) {
                props.setErrorAC ( true )

            }
        }
    }
    return <>

        <CounterMain error={ props.error } count={ props.count } displayString={ props.displayString }
                     disableReset={ disableReset }
                     disableSet={ disableSet } disableInc={ disableInc } setOnClick={ setOnClick }
                     resetOnclick={ resetOnclick } incrementOnclick={ incrementOnclick }/>
    </>
}


let mapStateToProps = (state: AppRootType): MapStatePropsType => {
    return {
        error: state.reducer.error,
        count: state.reducer.count,
        displayString: state.reducer.displayString,
        collapsed: state.reducer.collapsed,
        startValue: state.reducer.startValue,
        maxValue: state.reducer.maxValue
    }
}

const CounterMainContainer = connect ( mapStateToProps,
    {
        setCollapsedToValueAC,
        setDisplayStringToValueAC,
        setNewValueAC,
        setErrorAC,
    } ) ( CounterMainEffectContainer )

export default CounterMainContainer;