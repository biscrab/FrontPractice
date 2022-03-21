import React from 'react';

const Email = ({handleInput, username, email , onCreate}) =>{

    return(
    <div>
        <input
        name="name"
        placeholder = "게정명"
        onChange={handleInput}
        value={username}
    />
    <input
        name="email"
        placeholder = "이메일"
        onChange={handleInput}
        value={email}
    />
    <button onClick={onCreate}>등록</button>
</div>
    );
}

export default Email;