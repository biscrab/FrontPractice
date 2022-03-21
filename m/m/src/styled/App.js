import styled, {css} from "styled-components";

export const Logo = styled.img`
    position: absolute;
    left: ${props => props.left};
    width: 30px;
    height: 30px;
    border: 10px;
    border-radius: 50%;
    background-color: white;

    :hover{
        outline: 1px solid gray;
    }
`

export const Youtube = styled.img`
    position: absolute;
    left: ${props => props.left};
    width: 100px;
    height: 40px;
`

export const SearchGroup = styled.div`
    display: flex;
    position: absolute;
    transform: translateX(-50%);
    left: 50%;
`

export const Search = styled.input`
    width: 500px;
`

export const SearchButton = styled.button`
    width: 50px;
    height: 36px;
`

export const Category = styled.div`
    border-top: 1px solid gray;
    border-bottom: 1px solid gray;
`

export const MovieDiv = styled.div`
    background-color: whitesmoke;
    position: absolute;
    width: 86%;
    height: 100%;
    right: 0px;
`

export const Header = styled.div`
    height: 10px;
`

export const Menu = styled.div`
    padding-left: 20px;
    height: 40px;

    :hover{
        background-color: rgba(1, 1, 1, 0.2);
    }
`

export const MenuGroup = styled.div`
    position: absolute;
    width: 14%;
    height: 100%;
    overflow-y: scroll;
`

export const Profile = styled.img`
    border-radius: 50%;
    width: 50px;
    height: 50px;
`
export const Tittle = styled.p`

`

export const Name = styled.p`

`

export const ViewAndSince = styled.p`

`
export const Movie = styled.img`

`

export const Time = styled.p`
    background-color: rgba(1, 1, 1, 0.7);
`

export const MenuImage = styled.img`
    position: relative;
    left: 10%;
`