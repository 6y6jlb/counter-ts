import React from "react";
import style from './SetMenu.module.css'

type OneOptionFromMenuPropsType = {
    title: 'enter start value'|'enter max value'
    value: number
    onChange: (value:number) => void
    error: boolean
}

function OneOptionFromMenu(props:OneOptionFromMenuPropsType) {
    return (
        <div className={props.error?style.countZone + ' ' + style.error: style.countZone}>
            <span> {props.title}</span>
            <input type="number" value={props.value} onChange={(event)=>{
                props.onChange(event.currentTarget.valueAsNumber)
            }}/>
        </div>
    )

}

export default OneOptionFromMenu;