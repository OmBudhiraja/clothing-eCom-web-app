import React from 'react'
import styled from 'styled-components';
import Illustration from '../../assets/NotFoundIllustration.png'

const NotFoundPage: React.FC = () => {
    return (
        <NotFoundOverlay>
              <NotFoundContainer imageUrl={Illustration} />
              <NotFoundText>Sorry, A Dog ate this Page</NotFoundText>
          </NotFoundOverlay>
    )
}


const NotFoundOverlay = styled.div`
  height: 70vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NotFoundContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }: {imageUrl: string}) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
`;

const NotFoundText = styled.h2`
  font-size: 28px;
  color: #2f8e89;
`;

export default NotFoundPage
