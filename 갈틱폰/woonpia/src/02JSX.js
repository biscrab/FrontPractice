import React from 'react';
import './02JSX.css'

function JSX(){
    const name = "Lee Sang Woon";
    const alias = "Jerome";

    const style = {
        backgroundColor: "black",
        color: "aqua",
        fontSize: 24,
        padding: "1rem"
    }
    return (
        <>
            <div style={style}> My name is {name}</div>
            <div className="name">My alias is {alias}</div>
            <div className="alias">Bye</div>
        </>
    )
}

export default JSX;