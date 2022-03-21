import React,{useEffect, useRef, useState} from 'react';

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
  const context = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  canvas.style = `
    width: 100%;
    height: 100%;
    background-color: white;
  `;

  context.strokeStyle = "red"
  context.lineCap = "round"
  context.lineWidth = bold;
  contextRef.current = context;
},[]);

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

const drawSun = () => {

}

  setInterval(drawSun, 1000);

  return (
    <div className="Body">
    <canvas 
      onMouseDown={startDrawing}
      onMouseUp={finishDrawing}
      onMouseLeave={finishDrawing}
      onMouseMove={draw}
      ref = {canvasRef}
    />
    </div>
  );
}


export default DrawingPage;