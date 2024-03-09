import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
    ${reset},
    :root {
        font-family: 'Pretendard', Arial, Helvetica, sans-serif;
        font-size: 3em;
    }
`
