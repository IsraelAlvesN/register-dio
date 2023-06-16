import React from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import * as C from './style'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
// import { AccessAlarmFontIcon } from '@react-md/material-icon'

const Login = () => {
  const navigate = useNavigate()
  const handleClickSignIn = () => {
    navigate('/feed')
  }

  return (
    <>
        <Header />
        <C.Container>
          <C.Column>
            <C.Title>
              A plataforma para você aprender com experts...
            </C.Title>
          </C.Column>
          <C.Column>
            <C.Wrapper>
              <C.TitleLogin>Faça seu cadastro</C.TitleLogin>
              <C.SubTitleLogin>Faça seu login e make the change._</C.SubTitleLogin>
              <form action="">
                <Input placeholder="E-mail" />
                <Input placeholder="Senha" type="password" />
                <Button title="Entrar" variant="secondary" type="button" onClick={handleClickSignIn} />
                <C.Row>
                  <C.ForgotText>Esqueci minha senha</C.ForgotText>
                  <C.ForgotText>Criar Conta</C.ForgotText>
                </C.Row>
              </form>
            </C.Wrapper>
          </C.Column>
        </C.Container>
    </>
  )
}

export default Login