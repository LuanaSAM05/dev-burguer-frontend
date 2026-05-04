import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const globalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    margin: 0;
    overflow-x: hidden;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  button, a {
    cursor: pointer;
  }
`;

export default globalStyles;