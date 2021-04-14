import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  :root {
    --color-white: #FFFFFF;

    --color-lightBlue: #41B5D9;
    --color-darkBlue: #5F41D9;

    --color-lightGreen: #00E1E7;

    --color-lightPurple: #5F41D9;
    --color-darkPurple: #432E98;

    --color-lightGrey: #423D51;
    --color-darkGrey: #130C25;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input button {
    font-size: 1rem;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

`;
