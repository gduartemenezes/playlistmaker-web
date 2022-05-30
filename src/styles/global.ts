import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  // recebe cores do app em forma de variavel
  :root {
    --background: #f0f2f5;
    --green: #7FA429;
    --gray-100: #e1e1e6;
    --gray-300: #a8a8b3;
    --text-title: #363F5F;
    --text-body: #969CB2;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  // configura o tamanho da fonte para o tamanho da tela
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  // set up font pattern for the application
  body, textarea, button, p {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: #000;
  }
  /* body {
    background: var(--backgound);
  } */

  button {
    cursor: pointer;
  }
  :disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }



`;
