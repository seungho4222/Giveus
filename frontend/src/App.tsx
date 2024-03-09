import { ThemeProvider } from 'styled-components'
import HomePage from '@pages/HomePage'
import { darkTheme, lightTheme } from '@styles/theme'
import { GlobalStyle } from '@styles/GlobalStyle'

const App = () => {
  return (
    <>
      <div>
        <ThemeProvider theme={'light' ? lightTheme : darkTheme}>
          <GlobalStyle />
          <HomePage />
        </ThemeProvider>
      </div>
    </>
  )
}

export default App
