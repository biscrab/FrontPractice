import React from 'react';
import { useHistory } from 'react-router-dom';

const MainPage = () => {

    let history = useHistory();
    
    const handleMain = () => {
        history.push('/');
    }

    const handleDrawing = () => {
        history.push('/Drawing');
    }

    return(
        <>
            <h1 onClick={() => handleMain()}>Main</h1>
            <h1 onClick={() => handleDrawing()}>Drawing</h1>
        </>
    );
}

export default MainPage;