import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *,*::before,*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .App {
    padding: 15px;
    width: 100vw;
    height: 100vh;
    background: linear-gradient(180deg, rgba(81,164,219,1) 0%, rgba(115,186,225,1) 100%);
    /* background-color: #000; */
    color: #fff;
    font-family: 'Open Sans', sans-serif;
  }
`;

export default GlobalStyle;
