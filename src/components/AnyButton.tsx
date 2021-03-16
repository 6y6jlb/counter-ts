import React from "react";
import style from "./AnyButton.module.css";


type AnyButtonPropsType = {
    title: 'inc' | 'reset'|'set'
    onClick: () => void
    disable: boolean



}


export function AnyButton(props: AnyButtonPropsType) {

    const currentErrorIncClass = props.disable ? style.incrementErrorFrame : style.incrementFrame
    const currentErrorResetClass = props.disable ? style.resetErrorFrame : style.resetFrame


    return (
        <button disabled={props.disable}
                onClickCapture={props.onClick}
                className={props.title === 'inc' ? currentErrorIncClass : currentErrorResetClass}>
            {props.title}
        </button>)
}
