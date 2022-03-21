import React, {useRef, useState} from 'react';
import * as S from '../styled/App'
import a from  '../image/a.jpg'

const LoginPage = () => {

    const [inputs, setInputs] = useState({name: ''});
    const [lists, setLists] = useState ([]);
  
    const listNum = useRef(1);
    const {name} = inputs;
  
    const handleInput = (e) => {
      const {name, value} = e.target;
      setInputs({
          ...inputs,
          [name] : value
      })
      console.log(value)
  }

    return(
        <>
         <image src={a}></image>
         <S.Image src={a} />
         <S.NickName onChange={handleInput}/>
         <S.Login>시작</S.Login>
        </>
    );
}

export default LoginPage;