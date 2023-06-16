import React from 'react'
import * as C from './styles'

const Input = ({leftIcon, name, ...rest}) => {
  return (
    <C.InputContainer>
        {leftIcon ? <C.IconContainer>{leftIcon}</C.IconContainer> : null}
        <C.InputText {...rest}/>
    </C.InputContainer>
  )
}

export {Input}