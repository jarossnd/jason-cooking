import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        --tan: #FFECD1;
        --orange: #FF7D00;
        --black: #001524;
        --blue: rgb(5, 68, 104);
        --red: #78290F;
        --white: #FFFFFF;
    }
    html {
        font-size 8px;
        background-color: var(--tan);
    }
    body {
        font-family: 'Open Sans', sans-serif;
        font-size: 3rem;
        color: var(--black);
        line-height: 1.5;
        overflow-x: hidden;
        margin: 0;
        padding: 0;
    }
    h1 {
        text-align: center;
    }
    a {
        color: var(--black);
        text-decoration: none;
    }
    a:hover {
        color: var(--orange);
    }

    footer {
        padding: 5rem;
        font-size: 5rem;
        background-color: var(--tan);
      }
      footer p {
        text-align: center;
        font-size: 3rem;
        font-weight: 400;
      }
`

export default GlobalStyles
