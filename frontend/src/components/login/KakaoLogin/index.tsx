import * as k from '@components/login/KakaoLogin/KakaoLogin.styled'

const Index = () => {
  const onClick = () => {
    const kakaoURL = `http://j10c206.p.ssafy.io:8082/oauth2/authorization/kakao`
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
