import React,{useRef, useEffect, useState} from "react";
import * as S from './styled/App'
import moment from "moment";
import 'moment/locale/ko';
import './App.css'

function App() {

  const [text, setText] = useState(''); 
  const [money, setMoney] = useState(0);

  function acc(){
    var nose = 0;
    for(let i = 0; i < text.length; i++){
      if(text[i] === '코'){
        nose += 1;
        setMoney(-3000 * nose);
      }
      if(nose === 0){
        setMoney(0);
      }
    }
  }

  return (
    <div>
      <S.Tittle>케인인 님 수금액 계산기</S.Tittle>
      <S.Div>
        <S.Input onChange={e => setText(e.target.value)}></S.Input>
        <S.Change onClick={acc}>변환</S.Change>
      </S.Div>
      <S.Money>{money}원</S.Money>
    </div>
  );
}

export default App;
