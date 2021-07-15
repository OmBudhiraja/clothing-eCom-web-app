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
  @media screen and (max-width: 800px){
    padding: 20px 10px ;
  }
`

export default Home
