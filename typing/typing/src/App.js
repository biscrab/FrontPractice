import './App.css';
import React,{useState, useEffect} from 'react';

const App = () => {

  const text = ['html', 'css', 'javascript', 'react'];
  let type = '';
  let order = 0;
  let isTyping = false;
  let t;
  var i = 0;

  function tryTyping() {
      if(isTyping === true){
        typing();
      }
      else{
        if(order < 3){
          order++;
        }
        else{
          order = 0;
        }
        isTyping = true;
        //erase();
      }
  } 

  function typing(){
      t = text[order].split('');
    if(i < text[order].length){
      this.r.text = "저는"+type+t[i]+"개발자 입니다.";
      console.log(type);
      i++;
    }
    else{
      isTyping = false;
      i = 0;
    }
  }

  /*function erase(){
    while(type !== ''){
      setInterval(1000);
      setType(type.slice(0, -1));
      console.log(type);
    }
      isTyping = true;
  }*/

  setInterval(tryTyping, 3000)

  return(
    <>
      <h1 ref={this.r}></h1>
    </>
  );
}

export default App;
