import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    line-height: 1.428571429;
    color: #333;
    background-color: #fff;
  }
  h1, .h1, h2, .h2, h3, .h3 {
    margin-top: 20px;
    margin-bottom: 10px;
}

h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
}
a {
    color: #337ab7;
    text-decoration: none;
}
a {
    background-color: transparent;
}
`;

export default GlobalStyle;
