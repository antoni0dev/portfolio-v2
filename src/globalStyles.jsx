import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
         /*
    1. Use a more-intuitive box-sizing model.
    */
    *, *::before, *::after {
        box-sizing: border-box;
    }

    /*
    2. Remove default margin
    */
    * {
        margin: 0;
    }

    /*
    3. Allow percentage-based heights in the application
    */
    html, body {
        height: 100%;
        font-family: 'Source Sans Pro', sans-serif;
    }

   
    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    /*
    6. Improve media defaults
    */
    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

   
    input, button, textarea, select {
        font: inherit;
    }

    /*
    8. Avoid text overflows
    */
    p, h1, h2, h3, h4, h5, h6 {
        font-family: 'Karla', sans-serif;
        overflow-wrap: break-word;
    }

    /*
    9. Create a root stacking context
    */
    #root {
        height: 100%;
        isolation: isolate;
    }
`;

export default GlobalStyle;
