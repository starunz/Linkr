import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color:  #E5E5E5;
  }

  input, button, textarea {
    border: none;
  }
`

export default GlobalStyle;