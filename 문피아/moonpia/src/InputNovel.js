import React from 'react';
import './App.css';

const InputNovel = ({handleInput, novel, onCreate}) => {
    return(
        <div className="InputNovel">
        <input 
            name="novel"
            onChange={handleInput}
            value={novel}
            placeholder = "소설"
        />
        <button onClick={onCreate}>생성</button>
        </div>
    );
}

export default InputNovel;