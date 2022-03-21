import React,{useEffect, useRef, useState} from 'react';
import {Switch, Route} from 'react-router-dom'; 
import * as P from '../pages';
import * as S from '../styled/App';
import './App.css'
import axios from 'axios';

function App() {

  
  return (
    <div className="Body">
      <Route exact path= '/' component={P.Main} />
      <Route exact path= '/Drawing' component={P.Drawing} />
      <Route exact path='/Login' component={P.Login} />
      <Route exact path='/Lobby' component={P.Lobby} />
    </div>
  );
}


export default App;