import {connect} from "react-redux";
import {AppRootType} from "../../state/store";
import SetFrame from "./SetFrame";
import {
    setCollapsedToValueAC,
    setDisplayStringToValueAC,
    setErrorAC,
    setNewMaxValueAC,
    setNewStartValueAC,
    setNewValueAC
} from "../../state/counterReducer";
import React from "react";


type MapStatePropsType = {
    maxValue: number
    error: boolean
    startValue: number
    count: number
    collapsed: boolean

};


type SetFrameEffectContainerPropsType = {
    setNewValueAC: (value: number) => void
    setCollapsedToValueAC: (value: boolean) => void
    setDisplayStringToValueAC: (value: null | string) => void
    setNewStartValueAC: (value: number) => void
    setNewMaxValueAC:(value:number)=>void
    setErrorAC: (value: boolean) => void
    maxValue: number
    error: boolean
    startValue: number
    count: number
    collapsed: boolean
}

export const SetFrameEffectContainer: React.FC<SetFrameEffectContainerPropsType> = (props) => {
    const disableSet = (props.maxValue <= props.startValue || props.startValue<0)
    const onChangeMaxValue = (value: number) => {
        if (value > props.count && value > props.startValue && value >= 0 && props.startValue >= 0) {
            props.setNewMaxValueAC(value)
            props.setErrorAC ( false )
            props.setDisplayStringToValueAC ( 'enter value and press "set" ' )
        } else {
            props.setDisplayStringToValueAC ( 'incorrect value' )
            props.setNewMaxValueAC ( value )
            props.setErrorAC ( true )
        }
    }
    const onChangeStartValue = (value: number) => {
        if (value < props.maxValue && value >= 0 && props.startValue >= 0) {
            props.setNewStartValueAC ( value )
            props.setNewValueAC ( value )
            props.setErrorAC ( false )
            props.setDisplayStringToValueAC ( 'enter value and press "set" ' )
        } else {
            props.setNewStartValueAC ( value )
            props.setErrorAC ( true )
            props.setDisplayStringToValueAC ( 'incorrect value' )
        }
    }
    const setOnClick = () => {
        if (props.collapsed) {
            props.setCollapsedToValueAC ( false )
            props.setDisplayStringToValueAC ( 'enter value and press "set" ' )

        } else {
            props.setCollapsedToValueAC ( true )
            props.setDisplayStringToValueAC ( null )

        }
    }

    return <>
        <SetFrame maxValue={ props.maxValue }
                  error={ props.error }
                  startValue={ props.startValue }
                  disableSet={disableSet }
                  setOnClick={ setOnClick }
                  onChangeMaxValue={ onChangeMaxValue }
                  onChangeStartValue={ onChangeStartValue }
        />
    </>
}

let mapStateToProps = (state: AppRootType): MapStatePropsType => {
    return {
        maxValue: state.reducer.maxValue,
        error: state.reducer.error,
        startValue: state.reducer.startValue,
        count: state.reducer.count,
        collapsed: state.reducer.collapsed
    }
}

const SetFrameContainer = connect ( mapStateToProps, {
    setNewValueAC:setNewValueAC, setCollapsedToValueAC:setCollapsedToValueAC,
    setDisplayStringToValueAC:setDisplayStringToValueAC, setNewStartValueAC:setNewStartValueAC,
    setErrorAC:setErrorAC,setNewMaxValueAC:setNewMaxValueAC} ) ( SetFrameEffectContainer );
export default SetFrameContainer;