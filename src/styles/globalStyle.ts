import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
  body {
    width: 100%;
    height: 100%;
  }
  #root {
    width: 100%;
    height: 200vh;
  }
  ::-webkit-scrollbar {
    width: 10px;
    &-button {
      opacity: 0;
      display: none;
    }
    &-track {
      background-color: inherit;
    }
    &-thumb {
      border-radius: 5px;
      background-color: #e1e1e2;
    }
  }
`;

export default globalStyle;

