import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: 80%;
    height: 47px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #151515;
    width: 100%;
    height: 47px;
`

export const BuscarInputContainer = styled.div`
    width: 275px;
    height: 30px;
    background: #2D2D37;
    border-radius: 8px;
    padding: 2px 5px;
    margin: 0 12px;
`

export const Menu = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 18x;
    line-height: 25px;
    color: #FFF;
    margin-right: 12px;
    text-decoration: none;
`

export const MenuRight = styled.a`
    font-family: 'Open Sans';
    font-style: normal;
    font-size: 12x;
    line-height: 25px;
    color: #FFF;
    margin-right: 12px;
    text-decoration: none;
`

export const UserPicture = styled.img`
    width: auto;
    height: 32px;
    background-image
    border-radius: 22px;
`

export const Input = styled.input`
    background: transparent;
    flex: 1;
    border: 0;
    color: #FFF;
`