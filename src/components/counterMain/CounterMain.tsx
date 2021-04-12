import React from "react";
import {NavLink} from "react-router-dom";
import {Display} from "./Display";
import style from './CounterMain.module.css'
import {AnyButton} from "../anyButton/AnyButton";

type CounterMainPropsType = {
    error: boolean
    count: number
    displayString: string | null
    disableReset: boolean
    disableSet:boolean
    disableInc: boolean
    setOnClick: () => void
    resetOnclick: () => void
    incrementOnclick: () => void
}

export function CounterMain (props: CounterMainPropsType) {

    return <>
        {props.displayString ? <Display error={props.error} count={props.count} title={props.displayString}/> :
            <Display error={props.error} count={props.count}/>}
        <div className={style.buttonsFrame}>
            <AnyButton title={'inc'} size={'small'}
                       onClick={props.incrementOnclick}
                       disable={props.disableInc}
            />
            <NavLink to={'/set'}>
                <AnyButton title={'set'} size={'small'}
                           onClick={props.setOnClick}
                           disable={props.disableSet}
                />
            </NavLink>

            <AnyButton title={'reset'} size={'small'}
                       onClick={props.resetOnclick}
                       disable={props.disableReset}
            />
        </div>
    </>
}
