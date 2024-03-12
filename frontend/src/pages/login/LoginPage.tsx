import NaverLogin from '@components/login/NaverLogin'
import KakaoLogin from '@components/login/KakaoLogin'
import * as l from '@pages/login/LoginPage.styled'
import LoginSection from '@components/login/LoginSection'

const LoginPage = () => {
  return (
    <l.Container>
      <LoginSection />
      <KakaoLogin />
      <NaverLogin />
    </l.Container>
  )
}

export default LoginPage
