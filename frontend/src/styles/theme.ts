import { DefaultTheme } from 'styled-components'

export const lightTheme: DefaultTheme = {
  color: {
    text: '#000',
    subtext: '#333B4F',
    background: '#fff',
    main: '#4382FF',
    sub: '#FF8761',
  },
}

export const darkTheme: DefaultTheme = {
  ...lightTheme,
  color: {
    ...lightTheme.color,
    text: '#fff',
    subtext: '#d9d9d9',
    background: '#1C1719',
  },
}
