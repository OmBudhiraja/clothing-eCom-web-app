import React from 'react'
import Directory from '../../components/directory';
import styled from 'styled-components'

const Home: React.FC = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  )
}

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 80px;
`

export default Home
