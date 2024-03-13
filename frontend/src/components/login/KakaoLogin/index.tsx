import * as k from '@components/login/KakaoLogin/KakaoLogin.styled'

const Index = () => {
  const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY
  const REDIRECT_URI = import.meta.env.VITE_FRONT_BASE_URL + '/login/oauth'
  // const REDIRECT_URI = 'http://localhost:8082/login/oauth2/token/kakao'

  const onClick = () => {
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
    window.location.href = kakaoURL
  }

  return (
    <k.Button onClick={onClick}>
      <img src="icon/icon_kakao.png" alt="" />
      카카오로 시작하기
    </k.Button>
  )
}

export default Index
