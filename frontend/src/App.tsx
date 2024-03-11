import { ThemeProvider } from 'styled-components'
import HomePage from '@pages/HomePage'
import { darkTheme, lightTheme } from '@styles/theme'
import { GlobalStyle } from '@styles/GlobalStyle'
import useTheme from '@hooks/useTheme'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  const themeProps = useTheme()

  return (
    <>
      <div>
        <ThemeProvider
          theme={themeProps.theme === 'light' ? lightTheme : darkTheme}
        >
          <BrowserRouter>
            <GlobalStyle />
            <HomePage />
          </BrowserRouter>
        </ThemeProvider>
      </div>
    </>
  )
}

export default App
