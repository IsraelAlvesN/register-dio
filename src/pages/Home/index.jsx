import React from 'react'
import { Button } from '../../components/Button'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'

const Home = () => {
  return (
    <>
        <Header />
        <Button title="Teste 1" />
        <Button title="Teste 2" variant='secondary'/>
        <Link to="/login">Ir para o login</Link>
    </>
  )
}

export default Home