import * as k from '@components/login/KakaoLogin/KakaoLogin.styled'

const Index = () => {
  const { DEV, VITE_SERVER_URL } = import.meta.env
  const onClick = () => {
    const kakaoURL = DEV
      ? `${VITE_SERVER_URL}/oauth2/authorization/kakao`
      : '/oauth2/authorization/kakao'

    //const kakaoURL = `${BASE_URL}/oauth2/authorization/kakao`
    window.location.href = kakaoURL
  }
  console.log('dev', DEV)
  return (
    <k.Button onClick={onClick}>
      <img src="icon/icon_kakao.png" alt="" />
      카카오로 시작하기
    </k.Button>
  )
}

export default Index
