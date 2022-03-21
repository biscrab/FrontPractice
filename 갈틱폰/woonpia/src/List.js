import React from 'react';

const Item = ({item, onToggle, onRemove}) => {
    return(
        <div
            style={{textDecoration: item.line ? "underline" : "none"}}
        >

        <b>{item.name}</b>(<span>{item.email}</span>)
        <button onClick={() => onToggle(item.id)}>수정</button>
        <button onClick={() => onRemove(item.id)}>삭제</button>
        </div>
    )
}

const List = ({lists, onRemove, onToggle}) => {
    const itemList = lists.map(
    item => (
        <Item key={Item.id} item={item} onRemove={onRemove} onToggle={onToggle}/>
    )
    )
    return itemList; 
}

export default List;