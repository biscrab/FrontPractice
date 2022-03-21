import React from 'react'
import * as S from '../styled/App'


const List = (lists) => {
    const listItem = lists.map((list) =>
    <li>{list}</li>
);

    return(
        <div>
        <ul>{listItem}</ul>
        <button>삭제</button>
        </div>
    )  
}

export default List