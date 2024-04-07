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
import ScrollToTop from './utils/scrollToTop'

const App = () => {
  const themeProps = useTheme()
  const user = useRecoilValue(userState)

  return (
    <ThemeProvider theme={themeProps.theme ? lightTheme : darkTheme}>
      <BrowserRouter>
        <GlobalStyle />
        <ScrollToTop />
        {user.memberNo !== -1 ? (
          <AuthRouter />
        ) : (
          <HomeRouter user={user.memberNo !== -1} />
        )}
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
