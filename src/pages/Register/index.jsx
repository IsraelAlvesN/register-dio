import React from 'react'
import { useForm } from "react-hook-form";
import {api} from '../../services/api'
import { Link, useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Header from '../../components/Header'
import * as C from './style'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'


const schema = yup.object({
  name: yup.string().min(3, 'At least 3 char').required('Required field'),
  email: yup.string().email('Email is not valid').required('Required field'),
  password: yup.string().min(3, 'At least 3 char').required('Required field'),
}).required();


const Register = () => {
  const navigate = useNavigate()

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange'
  });

  console.log(errors, isValid)

  // const onSubmit = data => console.log(data)
  const onSubmit = async formData => {
    try {
      const {data} = await api.get(`users?email=${formData.email}&password=${formData.password}`)
      console.log(data)
      if(data.length === 1){
        navigate('/feed')
      }else{
        alert('sem usuario')
      }
    } catch (error) {
      alert('Houve um erro', error)
    }
  }

  return (
    <>
        <Header />
        <C.Container>
          <C.Column>
            <C.Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.
            </C.Title>
          </C.Column>
          <C.Column>
            <C.Wrapper>
              <C.TitleLogin>Faça seu cadastro</C.TitleLogin>
              <C.SubTitleLogin>Faça seu login e make the change._</C.SubTitleLogin>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Input name="name" errorMessage={errors?.name?.message} control={control} placeholder="Nome" type="text" leftIcon={<BsPerson />} />
                <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" type="email" leftIcon={<AiOutlineMail />} />
                <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<AiOutlineLock />} />
                <Button title="Entrar" variant="secondary" type="submit" />
                <C.Row>
                  <C.SubTitleLogin>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</C.SubTitleLogin>
                </C.Row>
                <C.Row>
                  <C.ForgotText>Já tenho conta.<Link to='/login'><span> Fazer login</span></Link></C.ForgotText>
                </C.Row>
              </form>
            </C.Wrapper>
          </C.Column>
        </C.Container>
    </>
  )
}

export default Register