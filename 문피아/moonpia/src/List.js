import React from 'react';
import './App.css'

const Item = ({item, onRemove}) => {
    return(
        <li className="novel">
            <b>{item.novel}</b>
            <button onClick={() => onRemove(item.id)}>삭제</button>
        </li>
    );
}

const List = ({onRemove, lists}) => {
    const itemlist = lists.map(
        item =>(
            <Item key={item.id} item={item} onRemove={onRemove}/>
        )
    )
    return itemlist;
}

export default List;
