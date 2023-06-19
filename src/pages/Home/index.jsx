import React from 'react'
import { Button } from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import * as C from './style'
import banner from '../../assets/image 1.png'

const Home = () => {
  const navigate = useNavigate()
  const handleClickSignIn = () => {
    navigate('/login')
  }

  return (
    <>
        <Header />
        <C.Container>
          <div>
            <C.Title>
              <C.TitleHighlight>
                Implemente
                <br />
              </C.TitleHighlight>
              o seu futuro global agora!
            </C.Title>
            <C.TextContent>
              Domine as tecnologias utilizadas pelas empresas mais inovadoras...
            </C.TextContent>
            <Button title="Começar agora" variant='secondary' onClick={handleClickSignIn} />
          </div>
          <div>
            <img src={banner} alt="Imagem principal" />
          </div>
        </C.Container>
    </>
  )
}

export default Home