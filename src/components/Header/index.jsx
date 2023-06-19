import React from 'react'
import logo from '../../assets/logo-dio 1.png'
import * as C from './styles'
import { Button } from '../Button'
import { Link } from 'react-router-dom'

const Header = ({autenticado}) => {
  return (
    <C.Wrapper>
        <C.Container>
            <C.Row>
                <Link to='/'>
                    <C.UserPicture src={logo} alt="Logo da DIO" />
                </Link>
                {autenticado ? (
                    <>
                        <C.BuscarInputContainer>
                            <C.Input placeholder='Buscar...' />
                        </C.BuscarInputContainer>
                        <C.Menu>Live Code</C.Menu>
                        <C.Menu>Global</C.Menu>
                    </>
                ) : null}
            </C.Row>
            <C.Row>
                {autenticado ? (
                    <C.UserPicture src="https://avatars.githubusercontent.com/u/95243089?v=4" alt="Logo da DIO" />
                ) : (
                    <>
                        <C.MenuRight href='#'>Home</C.MenuRight>
                        <Link to='/login'>
                            <Button title="Entrar" />
                        </Link>
                        <Link to='/register'>
                            <Button title="Cadastrar" />
                        </Link>
                    </>
                )}
            </C.Row>
        </C.Container>
    </C.Wrapper>
  )
}

export default Header