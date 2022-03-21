import React from 'react'
import * as S from '../styled/App'
import List from './List';

const LobbyPage = () => {
    return(
        <>
         <S.PlayerList>
             <List/>
         </S.PlayerList>
         <S.Start>시작</S.Start>
        </>
    );
}

export default LobbyPage;