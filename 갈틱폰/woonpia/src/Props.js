import React from 'react';

function Props({color, name}){
    return (
        <div style = {{color: color}}>My name is {name}.</div>
    )
}

Props.defaultProps = {
    name: 'undefinded'
}

export default Props;