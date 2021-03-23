import OneOptionFromMenu from "./OneOptionFromMenu";
import React from "react";
import style from './SetMenu.module.css'

type SetMenuPropsType = {
    maxValue: number
    startValue: number
    onChangeMaxValue: (value: number) => void
    onChangeStartValue: (value: number) => void
    error: boolean
}

function SetMenu(props: SetMenuPropsType) {
    return (
        <div className={style.setMenu}>
            <OneOptionFromMenu error={props.error} onChange={props.onChangeMaxValue} title={'enter max value'}
                               value={props.maxValue}/>
            <OneOptionFromMenu error={props.error} onChange={props.onChangeStartValue} title={'enter start value'}
                               value={props.startValue}/>

        </div>
    )
}

export default SetMenu;