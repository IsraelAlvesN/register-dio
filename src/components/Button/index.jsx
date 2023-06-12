import React from 'react'
import * as C from './styles'

const Button = ({title, variant = "primary", onClick}) => {
  return (
    <C.ButtonContainer variant={variant} onClick={onClick}>
        {title}
    </C.ButtonContainer>
  )
}

export {Button}
