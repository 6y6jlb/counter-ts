import React from "react";
import style from './Display.module.css'

type DisplayPropsType = {
    count: number
    error: boolean
    title?:string

}

export function Display(props: DisplayPropsType) {
    const currentErrorClass = props.error ? style.displayFrameError : style.displayFrame
    return <div className={currentErrorClass}>
        <div className={props.title?style.string:style.counter}>{props.title?props.title:props.count}</div>
    </div>
}