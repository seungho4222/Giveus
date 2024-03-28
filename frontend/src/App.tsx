import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '@styles/theme'
import { GlobalStyle } from '@styles/GlobalStyle'
import useTheme from '@hooks/useTheme'
import { BrowserRouter } from 'react-router-dom'
import AuthRouter from '@routers/AuthRouter'
import HomeRouter from '@routers/HomeRouter'
import { useRecoilValue } from 'recoil'
import { userState } from '@stores/user'
import '@/services/foregroundMessage'

const App = () => {
  const themeProps = useTheme()
  const user = useRecoilValue(userState)

  return (
    <ThemeProvider theme={themeProps.theme === 1 ? lightTheme : darkTheme}>
      <BrowserRouter>
        <GlobalStyle />
        {user.memberNo !== -1 ? <AuthRouter /> : <HomeRouter />}
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
