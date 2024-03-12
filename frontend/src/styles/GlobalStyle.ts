import { createGlobalStyle, DefaultTheme } from 'styled-components'
import reset from 'styled-reset'
import { colors } from './theme'

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :root {
        font-family: 'Pretendard', Arial, Helvetica, sans-serif;
        font-size: 16px;
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
        overflow-y: scroll;
        background-color: #f4f4f4;
        -ms-overflow-style: none; /* 인터넷 익스플로러 */
        scrollbar-width: none; /* 파이어폭스 */

        &::-webkit-scrollbar {
            display: none; /* 크롬, 사파리, 오페라, 엣지 */
            width: 0; /* Remove scrollbar space */
            height: 0;
            background: transparent; /* Optional: just make scrollbar invisible */
            -webkit-appearance: none;
        }
    }
    #root {
        max-width: 375px;
        min-height: 100vh;
        margin: 0 auto;
        background: ${({ theme }: { theme: DefaultTheme }) =>
          theme.color.background};
        color: ${({ theme }: { theme: DefaultTheme }) => theme.color.text};
    }
    a {
        outline: none;
        color: inherit;
        text-decoration: none;
        cursor: pointer;
    }
    button {
        font-family: 'Pretendard', Arial, Helvetica, sans-serif;
        font-size: 16px;
        border: none;
        cursor: pointer;
        background: none;
        &:disabled {
            background-color: #CACFD9;
        }
    }
`
