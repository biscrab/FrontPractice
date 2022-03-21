import React,{useState} from 'react'
import Header from './contents/Header'
import Menu from './contents/Menu'
import * as S from './styled/App'
import './styled/App.css'

const App = () => {

  const [list, setList] = useState([]);

  const List = {
  
  }
  
  return(
    <>
      <Header />
      <Menu />
      <S.MovieDiv>
      </S.MovieDiv>
      <S.MenuGroup>
            <Menu name="🏠홈" />
            <Menu name="🔭탐색" />
            <Menu name="📕구독" />
            <hr/>
            <Menu name="📂보관함" />
            <Menu name="⤵시청 기록" />
            <Menu name="💿내 동영상" />
            <Menu name="🕑나중에 볼 동영상" />
            <Menu name="👍좋아요 표시한 동영상" />
            <hr/>
            <p>구독</p>
            <hr/>
            <p>유튜브 더보기</p>
            <Menu name="📀Youtube Premium" />
            <Menu name="🎬영화" />
            <Menu name="🎮게임" />
            <Menu name="💥실시간" />
            <Menu name="💡학습" />
            <Menu name="🏆스포츠" />
            <hr />
            <Menu name="⚙️설정" />
            <Menu name="🚩신고기록" />
            <Menu name="❓고객센터" />
            <Menu name="💬의견 보내기" />
        </S.MenuGroup>
    </> 
  );
}

export default App;