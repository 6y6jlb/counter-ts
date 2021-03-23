import React from "react";
import style from "./AnyButton.module.css";


type AnyButtonPropsType = {
    title: 'inc' | 'reset' | 'set'
    onClick: () => void
    disable: boolean
    size:'small'|'big'


}


export function AnyButton(props: AnyButtonPropsType) {

    const currentErrorIncClass = props.disable ? style.incrementErrorFrame : style.incrementFrame
    const currentErrorResetClass = props.disable ? style.resetErrorFrame : style.resetFrame
    const currentSetClass = props.size==='small'?style.setStyleFrame:style.setStyleFrameBig
    const currentSetDisableClass = `${currentSetClass} ${props.disable&&style.setErrorFrame}`



    return (<>
            <button disabled={props.disable}
                    onClickCapture={() => {
                        props.onClick()
                    }}
                    className={props.title === 'inc' ? currentErrorIncClass : props.title === 'reset'? currentErrorResetClass:currentSetDisableClass }>
                {props.title}
            </button>
        </>
    )
}
