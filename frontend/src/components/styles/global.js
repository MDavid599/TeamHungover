import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Raleway', sans-serif;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        margin: 0;
    }
    html {
        height: 100%;
        width: 100%;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }
    *, *:before, *:after {
        -webkit-box-sizing: inherit;
        -moz-box-sizing: inherit;
         box-sizing: inherit;
    }
    #root {
        height: 100%;
        width: 100%;
    }
`;

export default GlobalStyle;
