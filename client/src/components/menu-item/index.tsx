import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';

interface Props {
    title: string;
    imageUrl: string;
    size: 'lg' | 'sm',
    linkUrl: string
}

const MenuItem: React.FC<Props> = ({title, imageUrl, size, linkUrl}) => {
    const history = useHistory()
    // const currentPath = history.location.pathname

    return (
        <MenuItemContainer size={size} onClick={()=> history.push(`${linkUrl}`)}>
          <BackgroundImageContainer className="background-image" imageUrl={imageUrl} />
          <ContentContainer className="content">
            <ContentTitle>{title.toUpperCase()}</ContentTitle>
            <ContentSubtitle>SHOP NOW</ContentSubtitle>
          </ContentContainer>
        </MenuItemContainer>
    )
}


export const MenuItemContainer = styled.div`
	height: ${({ size } :  {size: 'lg' | 'sm'}) => (size === 'lg' ? '380px' : '240px')};
	min-width: 30%;
	overflow: hidden;
	flex: 1 1 auto;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid black;
	margin: 0 7.5px 15px;
	overflow: hidden;
	&:hover {
		cursor: pointer;
		& .background-image {
			transform: scale(1.1);
			transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
		}
		& .content {
			opacity: 0.9;
		}
	}
	&:first-child {
    margin-right: 7.5px;
  }
  &:last-child {
    margin-left: 7.5px;
  }
  @media screen and (max-width: 800px){
    height: 200px
  }
`;

const BackgroundImageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  /* background-size: cover; */
  background-position: center;
  background-image: ${({ imageUrl }: {imageUrl: string}) => `url(${imageUrl})`};
`;

const ContentContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  @media screen and (max-width: 800px){
    padding: 0 10px;
  }
`;

const ContentTitle = styled.span`
  font-weight: bold;
  margin-bottom: 6px;
  font-size: 22px;
  color: #4a4a4a;
`;

const ContentSubtitle = styled.span`
  font-weight: lighter;
  font-size: 16px;
`;

export default MenuItem
