import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      text: string
      subtext: string
      background: string
      main: string
      sub: string
    }
  }
}
