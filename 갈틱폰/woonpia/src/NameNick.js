import React, {useState, useRef} from 'react';

const NameNick = () =>{
    const nameInput = useRef();
    const [inputs, setInputs] = useState({name: '', nickname: ''});

    const handleInput = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name] : value
        })
    }

    const onReset = () => {
        setInputs({name:'', nickname:''});
        console.log(nameInput.current);
        nameInput.current.focus();
    }

    return(
        <div>
            <div>
                <input
                    name="name"
                    onChange={(e) => handleInput(e)}
                    value = {inputs.name}
                    placeholder = "이름"
                    ref={nameInput}
                />
                <input
                    name="nickname"
                    onChange={(e) => handleInput(e)}
                    value = {inputs.nickname}
                    placeholder = "닉네임"
                />
                <button onClick={() => onReset()}>초기화</button>
        </div>
        <b>{inputs.name}({inputs.nickname})</b>
    </div>
    )
}

export default NameNick;