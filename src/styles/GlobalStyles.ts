import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    :root {
        font-size: 62.5%;
        --brand: #BB8AFF;
        
        // dark - initial theme
        --dark-bg-l1: #101011;
        --dark-bg-l2: #1A1D1E;
        --dark-text-l1: #F1F1F1;
        --dark-text-l2: #CACACA;
        --dark-border: #565656;

        // light - still in teste...
        --light-bg-l1: #F3F3EE;
        --light-bg-l2: #FFFFFF;
        --light-text-l1: #07010A;
        --light-text-l2: #716A74;
        --light-border: #ADADAD;
    }

    html, body, #__next {
        width: 100%;
        height: 100%;
    }

    body {
        font-size: 1.6rem;
        background: ${({ theme }) => theme.colors.BG_L1};
        color: ${({ theme }) => theme.colors.TEXT_L1};
        overflow-x: hidden;
    }
`;

export default GlobalStyles;
