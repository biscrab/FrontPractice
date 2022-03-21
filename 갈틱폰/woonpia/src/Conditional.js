import React from 'react';

function Conditional({isSpecial, children}){
    return (
        <div>
            {isSpecial ? <span>Special</span> : <span>NotSpecial</span>} {children} Hello World!
        </div>
    )
}

export default Conditional;