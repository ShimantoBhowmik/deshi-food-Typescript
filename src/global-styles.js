import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 10px 30px;
        font-family: 'PT Sans Narrow',sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: rgba($color: white, $alpha: 0.5);
        background-image: url('https://i.ibb.co/7YFdXjB/mannnnnnn.webp');
        background-blend-mode: lighten;

        @media screen and (max-width: 800px) {
            padding: 10px;
        }
    }
    
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    
    * {
        box-sizing: border-box;
    }
    a {
        text-decoration: none;
        color: black;
    }
`;