import React from 'react';
import './Home.css';
import { useHistory } from 'react-router-dom';

const Home = () =>{

    let history = useHistory();

    const handleGalley = () => {
        history.push('/galley');
    }

    const handleChat = () => {
        history.push('/chat');
    }
    
    const handleProfile = () => {
        history.push('/profile');
    }

    return(
        <div className = "Home">

        <div className = "head">
            <span className = "select">asdasd</span>
        </div>

        <div className = "head">
            <span className = "select" onClick={() => handleGalley()}>갤러리</span>
            <span className = "select" onClick={() => handleChat()}>채팅</span>
            <span className = "select" onClick={() => handleProfile()}>프로필</span>
        </div>

        <div className = "Body">

        <div className ="wellcomebody">
            <h1 className = "wellcome">VCC에 오신것을 환영합니다.</h1>
        </div>

        <div className = "wellcomebody">
            <h1 className = "introduce">VCC소개</h1>
        </div>

        <div>
            <span className = "intrdoucebody">vcc는 웹과 임베디드를 공부하고 있는 전공동아리 입니다.</span>
        </div>
        <div>
            <img src="musk.jpg"></img>
        </div>
        </div>
        </div>
    );
}

export default Home;