import React from 'react'
import logo from '../../assets/logo-dio.png'
import * as C from './styles'
import { Button } from '../Button'

const Header = () => {
  return (
    <C.Wrapper>
        <C.Container>
            <C.Row>
                <C.UserPicture src={logo} alt="Logo da DIO" />
                <C.BuscarInputContainer>
                    <C.Input placeholder='Buscar...' />
                </C.BuscarInputContainer>
                <C.Menu>Live Code</C.Menu>
                <C.Menu>Global</C.Menu>
            </C.Row>
            <C.Row>
                <C.MenuRight href='#'>Home</C.MenuRight>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
            </C.Row>
        </C.Container>
    </C.Wrapper>
  )
}

export default Header