import { createGlobalStyle, DefaultTheme } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :root {
        font-family: 'Pretendard', Arial, Helvetica, sans-serif;
        font-size: 16px;
        background: ${({ theme }: { theme: DefaultTheme }) =>
          theme.color.background};
        color: ${({ theme }: { theme: DefaultTheme }) => theme.color.text};
    }
    * {
        padding: 0;
        box-sizing: border-box;
    }
    html, body {
        margin: 0;
        padding: 0;
        font-weight: 400;
        line-height: 1.1;
    }
    a {
        outline: none;
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }
    button {
        border: none;
        cursor: pointer;
        background: none;
    }
`
