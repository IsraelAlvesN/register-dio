import React from 'react'
import * as C from './style'

const UserInfo = ({nome, image, percentual}) => {
  return (
    <C.Container>
        <C.UserPicture src={image} />
        <div>
            <C.NameText>{nome}</C.NameText>
            <C.Progress percentual={percentual} />
        </div>
    </C.Container>
  )
}

export default UserInfo