import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *,*::before,*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .App {
    position: relative;
    padding: 15px;
    width: 100vw;
    min-height: 100vh;
    background: linear-gradient(180deg, rgba(81,164,219,1) 0%, rgba(115,186,225,1) 100%);
    color: #fff;
    font-family: 'Open Sans', sans-serif;
    
    @media (min-width: 1200px) {
      min-height: calc(100vh - 100px);
      max-width: 500px;
      border-radius: 10px;
    }
  }

  #root {
    display: flex;
    justify-content: center;
    

    @media (min-width: 1200px) {
      padding: 50px 0;
    }
  }
`;

export default GlobalStyle;
