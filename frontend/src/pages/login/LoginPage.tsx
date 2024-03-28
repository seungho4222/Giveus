import NaverLogin from '@components/login/NaverLogin'
import KakaoLogin from '@components/login/KakaoLogin'
import * as l from '@pages/login/LoginPage.styled'
import LoginSection from '@components/login/LoginSection'
import { useRecoilValue } from 'recoil'
import { themeState } from '@/stores/theme'

const LoginPage = () => {
  const theme = useRecoilValue(themeState)

  return (
    <l.Theme $theme={theme}>
      <l.Container>
        <LoginSection />
        <KakaoLogin />
        <NaverLogin />
      </l.Container>
    </l.Theme>
  )
}

export default LoginPage
