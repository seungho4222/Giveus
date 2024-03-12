import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '@styles/theme'
import { GlobalStyle } from '@styles/GlobalStyle'
import useTheme from '@hooks/useTheme'
import { BrowserRouter } from 'react-router-dom'
import AuthRouter from '@routers/AuthRouter'
import HomeRouter from '@routers/HomeRouter'

const App = () => {
  const themeProps = useTheme()

  const user = false

  return (
    <ThemeProvider
      theme={themeProps.theme === 'light' ? lightTheme : darkTheme}
    >
      <BrowserRouter>
        <GlobalStyle />
        {user ? <AuthRouter /> : <HomeRouter />}
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
