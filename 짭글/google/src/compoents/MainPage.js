import React from 'react'
import * as S from '../styled/App'

const MainPage = ({isSearching, onRemove}) => {
    return(
        <>
            <div class="head">
            <span class="Gmail">Gmail</span>
            <span class="imagie">이미지</span>
            <img class="icon" src="./image1.png" />
            <img class="kane" src="./kane.jpg" /> 
            </div>
    
            <div class="Google">
            <div class="logo">
            <strong>
            <span class="G">G</span>
            <span class="o1">o</span>
            <span class="o2">o</span>
            <span class="g">g</span>
            <span class="l">l</span>
            <span class="e">e</span> 
            </strong>
            </div>
            </div> 

        <div class="phannel">
        <button class="search"> Google검색</button>
        <button class="lucky">I'm Feelling Lucky</button>
        </div>    
        <div class="top">
            <span>대한민국</span>
        </div>
        <div class="info">
            <span class="googleinfo">Google정보</span>
            <span class="googleinfo">광고</span>
            <span class="googleinfo">비즈니스</span>
            <span class="googleinfo">검색의 원리</span>
            <span class="googleinfo">개인정보처리방침</span>
            <span class="googleinfo">약관</span>
            <span class="googleinfo">설정</span>
        </div>
        </>
    );
}

export default MainPage;