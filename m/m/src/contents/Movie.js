import React from 'react';
import * as S from '../styled/App'

const Movie = ({item}) => {
    return(
        <div>
            <S.Movie src={item.movie}/>
            <S.Time>{item.time}</S.Time>
            <S.Profile src={item.profile}/>
            <S.Name>{item.name}</S.Name>
            <S.ViewAndSince>{item.view}⚫{item.since}</S.ViewAndSince>
        </div>
    );
}

const List = ({lists}) => {
    const itemList = lists.map(
        item => (
             <Movie item={item}/>
        )
    )
    return itemList;
}

export default List;