import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url('../fonts/inter/Inter-Thin.ttf') format('truetype');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../fonts/inter/Inter-ExtraLight.ttf') format('truetype');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../fonts/inter/Inter-Light.ttf') format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../fonts/inter/Inter-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../fonts/inter/Inter-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../fonts/inter/Inter-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../fonts/inter/Inter-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../fonts/inter/Inter-ExtraBold.ttf') format('truetype');
    font-weight: 800;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url('../fonts/inter/Inter-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    font-size: 62.5%;
    box-sizing: border-box;
  }
  
  body, html {
    background: #333;
    font-family: 'Inter', Helvetica, Sans-Serif;
  }
`
