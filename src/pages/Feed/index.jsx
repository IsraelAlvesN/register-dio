import React from 'react'
import Card from '../../components/Card'
import Header from '../../components/Header'
import * as C from './style'
import UserInfo from '../../components/UserInfo'

const Feed = () => {
  return (
    <>
        <Header autenticado={true} />
        <C.Container>
          <C.Column flex={3}>
            <C.Title>Feed</C.Title>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </C.Column>
          <C.Column>
            <C.TitleHighlight># RANKING SEMANAL</C.TitleHighlight>
            <UserInfo flex={1} percentual={90} nome='Israel' image="https://avatars.githubusercontent.com/u/95243089?v=4" />
            <UserInfo flex={1} percentual={80} nome='Israel' image="https://avatars.githubusercontent.com/u/95243089?v=4" />
            <UserInfo flex={1} percentual={72} nome='Israel' image="https://avatars.githubusercontent.com/u/95243089?v=4" />
            <UserInfo flex={1} percentual={68} nome='Israel' image="https://avatars.githubusercontent.com/u/95243089?v=4" />
            <UserInfo flex={1} percentual={65} nome='Israel' image="https://avatars.githubusercontent.com/u/95243089?v=4" />
          </C.Column>
        </C.Container>
    </>
  )
}

export default Feed