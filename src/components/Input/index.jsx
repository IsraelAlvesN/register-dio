import React from 'react'
import { Controller } from "react-hook-form";
import * as C from './styles'

const Input = ({leftIcon, name, control, errorMessage, ...rest}) => {
  return (
    <>
      <C.InputContainer>
          {leftIcon ? <C.IconContainer>{leftIcon}</C.IconContainer> : null}
          <Controller
            name={name}
            control={control}
            rules={{ required: true }}
            render={({ field }) => <C.InputText {...field} {...rest}/>}
          />
      </C.InputContainer>              
      {errorMessage ? <C.ErrorText>{errorMessage}</C.ErrorText> : null}
    </>
  )
}

export {Input}