import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  font-family: 'Roboto', sans-serif;
  padding: 20px 40px;
  font-size: 16px;
  @media screen and (max-width: 800px ){
      padding: 10px;
      font-size: 14px
  }
}

a{
  text-decoration: none;
  color: rgb(36, 33, 33);
}
`

