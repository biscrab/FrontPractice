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
            <Menu name="๐ ํ" />
            <Menu name="๐ญํ์" />
            <Menu name="๐๊ตฌ๋" />
            <hr/>
            <Menu name="๐๋ณด๊ดํจ" />
            <Menu name="โคต์์ฒญ ๊ธฐ๋ก" />
            <Menu name="๐ฟ๋ด ๋์์" />
            <Menu name="๐๋์ค์ ๋ณผ ๋์์" />
            <Menu name="๐์ข์์ ํ์ํ ๋์์" />
            <hr/>
            <p>๊ตฌ๋</p>
            <hr/>
            <p>์ ํ๋ธ ๋๋ณด๊ธฐ</p>
            <Menu name="๐Youtube Premium" />
            <Menu name="๐ฌ์ํ" />
            <Menu name="๐ฎ๊ฒ์" />
            <Menu name="๐ฅ์ค์๊ฐ" />
            <Menu name="๐กํ์ต" />
            <Menu name="๐์คํฌ์ธ " />
            <hr />
            <Menu name="โ๏ธ์ค์ " />
            <Menu name="๐ฉ์ ๊ณ ๊ธฐ๋ก" />
            <Menu name="โ๊ณ ๊ฐ์ผํฐ" />
            <Menu name="๐ฌ์๊ฒฌ ๋ณด๋ด๊ธฐ" />
        </S.MenuGroup>
    </> 
  );
}

export default App;