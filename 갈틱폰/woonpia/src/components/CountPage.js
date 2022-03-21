import React, { useReducer } from 'react';
import './Drawing.css'

const initialState = {
    number: 0,
    diff: 1
}

const reducer = (state, action) => {
    switch(action.type){
        case 'INCREASE' :
            return {
                ...state,
                number: state.number + state.diff
            }
        case 'DECREASE' :
            return {
                ...state,
                number: state.number - state.diff
            }
        case 'CHANGE_DIFF' :
            return{
                ...state,
                diff: action.diff
            }
        default:
            return state;
    }
}

const CountPage = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {number, diff} = state;

    const handleIncrease = () => {
        dispatch({type: 'INCREASE'})
    }

    const handleDecrease = () => {
        dispatch({type: 'DECREASE'});
    }
    
    const handleChangeDiff = (diff) => {
        dispatch({
            type: 'CHANGE_DIFF',
            diff
        })
    }

    return (
        <>
            <h2>Count</h2>
            <h3>{number}</h3>
            <input type="number" onChange={(e) => handleChangeDiff(Number(e.target.value))} value={diff} />
            <button onClick={() => handleIncrease()}>+</button>
            <button onClick={() => handleDecrease()}>-</button>
        </>
    )
}

export default CountPage;