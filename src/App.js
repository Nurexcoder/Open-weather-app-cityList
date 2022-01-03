import React from 'react'
import styled from 'styled-components';
import Left from './Components/Left'
import Right from './Components/Right'

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`
const App = () => {
  return (
    <Container>
      <Left/>
      <Right/>
    </Container>
  )
}

export default App
