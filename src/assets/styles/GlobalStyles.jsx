import { createGlobalStyle } from 'styled-components';
import 'normalize.css';

const GlobalStyles = createGlobalStyle`
:root {
    --color-text: #101828;
    --color-main: #475467;
    --color-button: #E44848;
    --color-button-hover: #D84343;
    --color-rating: #FFC531;
    --color-block: #F2F4F7;
    --color-inputs: #F7F7F7;
    --color-background: #FFFFFF;
}

@font-face {
    font-family: 'Inter 24pt';
    src: url('../fonts/Inter/Inter24pt-Medium.woff2') format('woff2'),
        url('../fonts/Inter/Inter24pt-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter 24pt';
    src: url('../fonts/Inter/Inter24pt-Regular.woff2') format('woff2'),
        url('../fonts/Inter/Inter24pt-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Inter 24pt';
    src: url('../fonts/Inter/Inter24pt-SemiBold.woff2') format('woff2'),
        url('../fonts/Inter/Inter24pt-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}


@font-face {
    font-family: 'Roboto';
    src: url('../fonts/Roboto/Roboto-Bold.woff2') format('woff2'),
        url('../fonts/Roboto/Roboto-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Roboto';
    src: url('../fonts/Roboto/Roboto-Medium.woff2') format('woff2'),
        url('../fonts/Roboto/Roboto-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Roboto';
    src: url('../fonts/Roboto/Roboto-Regular.woff2') format('woff2'),
        url('../fonts/Roboto/Roboto-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
body {
    font-family: 'Inter', 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    letter-spacing: -0.005em;
    color: var(--color-text);
    background-color: var(--color-background);
    overflow-x: hidden;
    margin: 0;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
    margin: 0;
}
ul,
ol {
    list-style-type: none;
    margin: 0;
    padding: 0;
}
a {
    color: currentColor;
    text-decoration: none;
}
img {
    display: block;
    height: auto;
    border: none;
    max-width: 100%;
}
button {
    font-family: inherit;
    border: none;
    cursor: pointer;
}
*, 
*::before, 
*::after {
    box-sizing:border-box;
}
input {
    font-family: inherit;
    &:focus {
    outline: none;
    }
}`;
export default GlobalStyles;