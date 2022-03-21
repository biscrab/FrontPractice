import styled, {css} from 'styled-components';

export const Container = styled.div`
    background-color: violet;

    background-color: ${props => props.color};

    ${props => props.done ?
        css`
            color : white;
        `
        :
        css`
            color : greenyellow;
        `
    }
`;

export const Contents = styled.div`
    background-color: white;
    width: 50%;
`;

export const Paint = styled.canvas`
    background-color: ${props => props.color};
    width: 30px;
    height: 30px;
    margin-top: 5px;
    margin-left: 5px;
    margin-right: 5px;

    &:hover{
        outline: 3px solid white;
    }

    ${props => props.outline ?
        css`
            outline : 3px solid black; 
         `
         :
         css`
         
         ` 
    }
`;

export const Pallet = styled.div`
    background-color: rgba(100, 100, 100, 0.3);
    outline: 1px solid black;
    border-radius: 5;
    height: 275px;
    width: 80px;
    flex-grow: 5px;
    position: absolute;
    top: 50%;
    transform:translateY(-50%);
`;

export const Time = styled.input`
  overflow: hidden;
  display: block;
  appearance: none;
  max-width: 770px;
  width: 100%;
  margin: 0;
  height: 50px;
  cursor: pointer;
  border-radius: 5px;
  position: absolute;
  left: 50%;
  top: 50px;
  transform:translateX(-50%);

  &:focus {
    outline: none;
  }

  &::-moz-range-track,
  &::-moz-range-progress {
    width: 100%;
    height: 50px;
  }

  &::-moz-range-progress {
    background: blue;
  }

  &::-moz-range-thumb {
    appearance: none;
    margin: 0;
    height: 50;
    width: 50;
    background: blue;
    border: 0;
    transition: background-color 150ms;
  }

 &::-moz-range-thumb {
    background-color: blue;
 }

`;

export const TimeFont = styled.div`
    font-size: xx-large;
    color: white;
    position: absolute;
    top: 10px;
    left: 50%;
    transform:translateX(-50%);
    -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none; user-select:none;
`;

export const Finish = styled.button`
    position: absolute;
    transform:translate(-50%);
    left: 50%;
    bottom: 5%;
    background-color: skyblue;
    height: 50px;
    width: 100px;
    outline: 0;
    border: 0ch;
    font-size: large;
    border-radius: 5px;
    -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none; user-select:none;

    :hover{
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
    }
`;

export const BoldFont = styled.span`
    position: absolute;
    top: 510px;
    left: 150px;
    font-weight: bold;
    -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none; user-select:none;

`;

export const People = styled.span`
    font-size: 30px;
    color: white;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
    -webkit-user-select:none; -moz-user-select:none; -ms-user-select:none; user-select:none;
`;

export const Canvas = styled.div`
  width : 700px;
  height : 500px;
  outline : 5px solid black;
  background-color: white;
`;

export const Bold = styled.input`
    position: absolute;
    top: 510px;
    cursor: pointer;
    -webkit-appearance: none;
    background: whitesmoke;
    
    :-webkit-slider-thumb{
    }
`

export const NickName = styled.input`
    background : rgba(0, 0, 0, 0.3);
    box-shadow: 0 0 0 2px #ffffff;
    border-radius: 10px;
    height: 30px;
    width: 270px;
    position: absolute;
    top: 60%;
    left: 20%;
    :focus {outline:none;}
`

export const Image = styled.image`
    border-radius: 50%;
    background: white;
    width: 200px;
    height: 200px;
    position: absolute;
    top: 30%;
    left: 20%;
    transform:translateX(20%);
`

export const Login = styled.button`
    border-radius: 5px;
    background: lightgreen;
    width: 100px;
    height: 50px;
    outline: 0px;
    border: 0px;
    position: absolute;
    left: 25.5%;
    top: 70%;
`

export const PlayerList = styled.div`
    background: rgba(100, 100, 100, 0.5);
    position: absolute;
    top: 60px;
    left: 50px;
    width: 400px;
    height: 600px;
`

export const Start = styled.button`
    border-radius: 5px;
    background: lightgreen;
    width: 100px;
    height: 50px;
    outline: 0px;
    border: 0px;
    position: absolute;
    left: 30%;
    bottom: 10%;
`

export const List = styled.div`
    background:white;
    width: 360px;
    height: 60px;
    margin: 20px;
    border-radius: 5px;
    font-size: 20px;
`