import React from 'react';
import {useHistory} from 'react-router-dom';

const Head = () => {

    let history = useHistory();
    
    const handleMain = () => {
        history.push('/');
    }

    const handleProfile = () => {
        history.push('/profile');
    }

    const handleChat = () => {
        history.push('/chat')
    }

    return(
        <>
            <div className="top_head">
            
            </div>
            <div className="bottom_head">
            <span className="select" onClick={() => handleMain()}>홈</span>
            <span className="select" onClick={() => handleProfile()}>프로필</span>
            <span className="select" onClick={() => handleChat()}>채팅방</span>
            </div>
        </>
    );
}

export default Head;