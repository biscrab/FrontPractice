import React,{useEffect, useRef, useState} from 'react';
import * as S from '../styled/App'

function DrawingPage() {

const [bold, SetBold] = useState(5);
const [color, SetColor] = useState("black");
const canvasRef = useRef(null)
const contextRef = useRef(null)
const [isDrawing, setIsDrawing] = useState(false)
const [finishpeople, SetFinishPeople] = useState(0)
const [allpeople, SetAllPeople] = useState(0)
const [time, SetTime] = useState(100);

useEffect(() => { 
  const canvas = canvasRef.current;
  const context = canvas.getContext("2d")
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  canvas.style = `
    width: 50%;
    height: 65%;
    outline: 5px solid black;
    position: absolute;
    left: 50%;
    transform:translateX(-50%);
    background-color: white;
    top: 20%;
  `;

  context.scale(2, 1.55)
  context.strokeStyle = "red"
  context.lineCap = "round"
  context.lineWidth = bold;
  contextRef.current = context;
},[]);

useEffect(() => {
  const countdown = setInterval(() => {
    if(parseInt(time) > 0){
      SetTime(parseInt(time)-1);
    }  
  }, 1000);
  return () => clearInterval(countdown);
}, [time]);

const startDrawing = ({nativeEvent}) => {
  const {offsetX, offsetY} = nativeEvent;
  contextRef.current.beginPath()
  contextRef.current.moveTo(offsetX, offsetY)
  setIsDrawing(true)
  
  const canvas = canvasRef.current;
  const context = canvas.getContext("2d")

  context.lineWidth = bold;
  context.strokeStyle = color;
}

const finishDrawing = () => {
  contextRef.current.beginPath();
  setIsDrawing(false)
}

const onEnd = () => {

}

const draw = ({nativeEvent}) => {
  if(isDrawing){
    const {offsetX , offsetY} = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke()
  }
}

  return (
    <div className="Body">
    <canvas 
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseLeave={finishDrawing}
      onMouseMove={draw}
      ref = {canvasRef}
    />
    <div>
      <S.Bold type="range"  min="1" max="50" value={bold} onChange={(e) => SetBold(e.target.value)} />
        <S.BoldFont>굵기: {bold}</S.BoldFont>
    </div>
    <S.Pallet>
            <S.Paint onClick={() => SetColor("black")} color="black"/>
            <S.Paint onClick={() => SetColor("white")} color="white"/>
            <S.Paint onClick={() => SetColor("red")} color="red"/>
            <S.Paint onClick={() => SetColor("orange")} color="orange"/>
            <S.Paint onClick={() => SetColor("yellow")} color="yellow"/>
            <S.Paint onClick={() => SetColor("green")} color="green"/>
            <S.Paint onClick={() => SetColor("blue")} color="blue"/>
            <S.Paint onClick={() => SetColor("navy")} color="navy"/>
            <S.Paint onClick={() => SetColor("purple")} color="purple"/>        
            <S.Paint onClick={() => SetColor("#fbceb1")} color="#fbceb1"/>
            <S.Paint onClick={() => SetColor("pink")} color="pink"/>
            <S.Paint onClick={() => SetColor("skyblue")} color="skyblue"/>
            <S.Paint onClick={() => SetColor("#81c147")} color="#81c147"/>
            <S.Paint onClick={() => SetColor("#09ffec")} color="#09ffec"/>
        </S.Pallet>
      <div>
        <S.Finish>완성</S.Finish>
      </div>
      <div>
          <S.People>{finishpeople} / {allpeople}</S.People>
          <S.Time type="range" onChange={(e) => SetTime(e.target.value)} value={time} readonly></S.Time>
          <S.TimeFont>시간: {time}</S.TimeFont>
        </div>
    </div>
  );
}


export default DrawingPage;