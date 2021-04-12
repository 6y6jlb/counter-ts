import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import SetFrameContainer from "./components/setFrame/SetFrame.container";
import CounterMainContainer from "./components/counterMain/counterMain.container";


/*export type StateType = {
    count:number
    startValue: number
    maxValue: number
    error:boolean
    collapsed: boolean
    displayString: null | string

}*/

function App() {

    /*const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(startValue + 1)
    const [count, setCount] = useState<number>(startValue)
    const [error, setError] = useState<boolean>(false)
    const [collapseMenu, setCollapseMenu] = useState<boolean>(true)
    const [displayString, setDisplayString] = useState<string | null>(null)*/

    //type StateType = typeof initialState

    /*
        const initialState:StateType = {
            count: 0,
            startValue: 0,
            maxValue: 1,
            error: false,
            collapsed: true,
            displayString: null as null | string
        }
        const [state, dispatch] = useReducer(reducer, initialState)
    */

    /*    useEffect(() => {
            const newMaxValue = localStorage.getItem('maxValue')
            const newStartValue = localStorage.getItem('startValue')
            if (newMaxValue) {
                dispatch(setNewMaxValueAC(JSON.parse(newMaxValue)))
                //setMaxValue(JSON.parse(newMaxValue))
            }
            if (newStartValue) {
                dispatch(setNewStartValueAC(JSON.parse(newStartValue)))
                dispatch(setNewValueAC(JSON.parse(newStartValue)))
                //setStartValue(JSON.parse(newStartValue))
            }
        }, [])*/

    /*    function incrementOnclick() {
            const newValue = state.count + 1
            if (newValue <= state.maxValue && newValue > 0) {
                dispatch(setNewValueAC(newValue))
                if (newValue >= state.maxValue) {
                    dispatch(setErrorAC(true))
                    //setError(true)
                }
            }
            /!*let newValue = count+1
            if (newValue <= maxValue && newValue > 0) {
                setCount(newValue)
                if (newValue >= maxValue) {
                    setError(true)
                }
            }*!/
        }*/


    /*

        function resetOnclick() {
            dispatch(setNewValueAC(state.startValue))
            //setCount(startValue)
            dispatch(setErrorAC(false))
            //setError(false)
        }

        function setOnClick() {
            if (state.collapsed) {
                dispatch(setCollapsedToValueAC(false))
                //setCollapseMenu(false)
                dispatch(setDisplayStringToValueAC('enter value and press "set" '))
                //setDisplayString('enter value and press "set" ')
            } else {
                localStorage.setItem('maxValue', JSON.stringify(state.maxValue))
                localStorage.setItem('startValue', JSON.stringify(state.startValue))
                dispatch(setCollapsedToValueAC(true))
                //setCollapseMenu(true)
                dispatch(setDisplayStringToValueAC(null))
                //setDisplayString(null)
            }


        }
    */

    /*   function onChangeStartValue(value: number) {
           if (value < state.maxValue && value >= 0 && state.startValue >= 0) {
               //setStartValue(value)
               dispatch(setNewStartValueAC(value))
               dispatch(setNewValueAC(value))
               dispatch(setErrorAC(false))
               //setCount(value)
               //setError(false)
               dispatch(setDisplayStringToValueAC('enter value and press "set" '))
               //setDisplayString('enter value and press "set" ')
           } else {
               //setStartValue(value)
               dispatch(setNewStartValueAC(value))
               dispatch(setErrorAC(true))
               //setError(true)
               dispatch(setDisplayStringToValueAC('incorrect value'))
               //setDisplayString('incorrect value')
           }
       }*/
    /*
        function onChangeMaxValue(value: number) {
            if (value > state.count && value > state.startValue && value >= 0 && state.startValue >= 0) {
                dispatch(setNewMaxValueAC(value))
                //setMaxValue(value)
                dispatch(setErrorAC(false))
                //setError(false)
                dispatch(setDisplayStringToValueAC('enter value and press "set" '))
                //setDisplayString('enter value and press "set" ')
            } else {
                dispatch(setDisplayStringToValueAC('incorrect value'))
                //setDisplayString('incorrect value')
                dispatch(setNewMaxValueAC(value))
                //setMaxValue(value)
                dispatch(setErrorAC(true))
                //setError(true)
            }
        }*/

    /* const disableInc = (state.count >= state.maxValue) || !state.collapsed
     const disableReset = (state.count === state.startValue) || !state.collapsed
     const disableSet = (state.maxValue <= state.startValue || state.startValue<0)*/

    return (
        <BrowserRouter>
            <div className="App">
                <Route exact path={ '/' }
                       render={ () => <CounterMainContainer/> }/>
                {/*<Route exact path={'/'}
                       render={() => <CounterMain disableSet={disableSet} error={state.error} count={state.count}
                                                  disableInc={disableInc} disableReset={disableReset}
                                                  displayString={state.displayString}
                                                  incrementOnclick={incrementOnclick}
                                                  resetOnclick={resetOnclick}
                                                  setOnClick={setOnClick}/>}/>*/ }
                <Route exact path={ '/set' }
                       render={ () => <SetFrameContainer/> }/>
                {/* <Route exact path={'/set'}
                       render={() => <SetFrame disableSet={disableSet} maxValue={state.maxValue} error={state.error}
                                               startValue={state.startValue}
                                               onChangeMaxValue={onChangeMaxValue}
                                               onChangeStartValue={onChangeStartValue}
                                               setOnClick={setOnClick}/>}/>*/ }


            </div>
        </BrowserRouter>
    );
}

export default App;



