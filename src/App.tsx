import React, {useEffect, useState} from 'react';
import './App.css';
import {Display} from "./components/Display";
import {AnyButton} from "./components/AnyButton";
import SetMenu from "./components/SetMenu";


function App() {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(startValue + 1)
    const [count, setCount] = useState<number>(startValue)
    const [error, setError] = useState<boolean>(false)
    const [collapseMenu, setCollapseMenu] = useState<boolean>(true)
    const [displayString, setDisplayString] = useState<string | null>(null)

    useEffect(() => {
        const newMaxValue = localStorage.getItem('maxValue')
        const newStartValue = localStorage.getItem('startValue')
        if (newMaxValue) {
            setMaxValue(JSON.parse(newMaxValue))
        }
        if (newStartValue) {
            setStartValue(JSON.parse(newStartValue))
        }
    }, [])

    function incrementOnclick() {
        let newValue = count + 1
        if (newValue <= maxValue && newValue > 0) {
            setCount(newValue)
            if (newValue >= maxValue) {
                setError(true)
            }
        }
    }


    function resetOnclick() {
        setCount(startValue)
        setError(false)
    }

    function setOnClick() {
        if (collapseMenu) {
            setCollapseMenu(false)
            setDisplayString('enter value and press "set" ')
        } else {
            localStorage.setItem('maxValue', JSON.stringify(maxValue))
            localStorage.setItem('startValue', JSON.stringify(startValue))
            setCollapseMenu(true)
            setDisplayString(null)
        }


    }

    function onChangeStartValue(value: number) {
        if (value < maxValue && value >= 0 && startValue >= 0) {
            setStartValue(value)
            setCount(value)
            setError(false)
            setDisplayString('enter value and press "set" ')
        } else {
            setStartValue(value)
            setError(true)
            setDisplayString('incorrect value')
        }
    }

    function onChangeMaxValue(value: number) {
        if (value > count && value > startValue && value >= 0 && startValue >= 0) {
            setMaxValue(value)
            setError(false)
            setDisplayString('enter value and press "set" ')
        } else {
            setDisplayString('incorrect value')
            setMaxValue(value)
            setError(true)
        }
    }


    const disableInc = (count >= maxValue) || !collapseMenu
    const disableReset = (count === startValue) || !collapseMenu


    return (
        <div className="App">
            <div className={'counterFrame'}>
                {displayString ? <Display error={error} count={count} title={displayString}/> :
                    <Display error={error} count={count}/>}
                <div className={'buttonsFrame'}>
                    <AnyButton title={'inc'}
                               onClick={incrementOnclick}
                               disable={disableInc}
                    />
                    <AnyButton title={'set'}
                               onClick={setOnClick}
                               disable={error}
                    />
                    <AnyButton title={'reset'}
                               onClick={resetOnclick}
                               disable={disableReset}
                    />
                </div>
                <div className={`menuFrame ${!collapseMenu ? 'open' : ''}`}>
                    <SetMenu maxValue={maxValue} error={error}
                             startValue={startValue}
                             onChangeMaxValue={onChangeMaxValue}
                             onChangeStartValue={onChangeStartValue}/>
                </div>
            </div>
        </div>
    );
}

export default App;



