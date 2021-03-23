import {AnyButton} from "../anyButton/AnyButton";
import SetMenu from "./SetMenu";
import React from "react";
import {NavLink} from "react-router-dom";
import style from './SetMenu.module.css'

type SetFramePropsType = {
    maxValue: number
    error: boolean
    startValue: number
    onChangeMaxValue: (value: number) => void
    onChangeStartValue: (value: number) => void
    setOnClick: () => void
    disableSet:boolean
}

const SetFrame = (props: SetFramePropsType) => {
    return (
        <div className={style.setFrame}>
            <SetMenu maxValue={props.maxValue} error={props.error}
                     startValue={props.startValue}
                     onChangeMaxValue={props.onChangeMaxValue}
                     onChangeStartValue={props.onChangeStartValue}/>
            <div className={style.buttonsFrameFromSet}>
                <NavLink to={'/'}>
                    <AnyButton title={'set'} size={'big'}
                               onClick={props.setOnClick}
                               disable={props.disableSet}
                    />
                </NavLink>
            </div>
        </div>
    )
}
export default SetFrame