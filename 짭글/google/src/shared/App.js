import React, { Component, useRef, useState } from 'react';
import {Switch, Route} from 'react-router-dom'; 
import * as P from '../pages/index';
import './App.css'

const [lists, useLists] = useState([
    {search: sadas},
    {search: sadasdasd}
]);

let isSearching = false;

const onSearch = () => {
    if(isSearching === true){
        isSearching = false;
    }else{
        isSearching = true;
    }
    console.log(isSearching);
}

const onRemove = () => {
    useList(state.lists.filter(x => x.id !== action.id))
}

function App() {
    return (
        <div>
            <P.Main 
            isSearching = {isSearching}
            onRemove = {onRemove}
            lists = {lists}
            />
            <input type="text" class="text" onClick={onSearch} />
            <P.List/>
        </div>
    );
}

export default App;
