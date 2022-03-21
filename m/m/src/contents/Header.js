import React from 'react'
import * as S from '../styled/App'
import Logo from '../contents/logo.PNG'
import menu from '../contents/menu.PNG'
import mike from '../contents/mike.PNG'

const Header = () => {
    return(
        <S.Header>
            <S.Logo src={menu} left="10px"/>
            <S.Youtube src={Logo} left="50px;"/>
            <S.SearchGroup>
                <S.Search placeholder="검색"/>
                <S.SearchButton>🔍</S.SearchButton>
            </S.SearchGroup>
            <S.Logo src={mike} left="80%;"/>
        </S.Header>  
    );
}

export default Header