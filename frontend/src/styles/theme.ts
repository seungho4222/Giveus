import { DefaultTheme } from 'styled-components'

export const colors = {
  gray01: '#fafafa',
  gray02: '#f2f4f6',
  gray03: '#d9d9d9',
  gray04: '#959DB1',
  gray05: '#333B4F',
  blue01: '#4382FF',
  blue02: '#426EC7',
  orange01: '#FF8761',
  yellow01: '#FEE500',
  green01: '#02C75A',
  black01: '#1C1719',
  black02: '#2B2E32',
}

export const sizes = {
  minWidth: '360px',
  maxWidth: '430px',
}

export const lightTheme: DefaultTheme = {
  color: {
    text: '#000',
    background: '#fff',
  },
}

export const darkTheme: DefaultTheme = {
  color: {
    text: '#fff',
    background: '#1C1719',
  },
}
