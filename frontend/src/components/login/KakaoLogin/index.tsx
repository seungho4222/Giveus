import * as k from '@components/login/KakaoLogin/KakaoLogin.styled'

const Index = () => {
  const { DEV, VITE_SERVER_URL } = import.meta.env
  const onClick = () => {
    const mode = DEV ? VITE_SERVER_URL : ''
    const kakaoURL = `${mode}/oauth2/authorization/kakao`
    //const kakaoURL = `${BASE_URL}/oauth2/authorization/kakao`
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
