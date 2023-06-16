import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'
import * as C from './style'

const Card = () => {
  return (
    <C.CardContainer>
        <C.ImageBackground src='https://avatars.githubusercontent.com/u/95243089?v=4'/>
        <C.Content>
            <C.UserInfo>
                <C.UserPicture src='https://avatars.githubusercontent.com/u/95243089?v=4' />
                <div>
                    <h4>Israel</h4>
                    <p>Há 8 minutos</p>
                </div>
            </C.UserInfo>
            <C.PostInfo>
                <h4>Projeto curso React</h4>
                <p>Projeto feito com o curso de react...<strong>Saiba Mais</strong></p>
            </C.PostInfo>
            <C.HasInfo>
                <h4>#HTML #CSS #JAVASCRIPT</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </C.HasInfo>
        </C.Content>
    </C.CardContainer>
  )
}

export default Card