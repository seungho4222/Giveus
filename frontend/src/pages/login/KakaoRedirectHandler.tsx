const { Kakao } = window

const KakaoRedirectHandler = () => {
  const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_API_KEY
  const code = new URL(window.location.href).searchParams.get('code')

  console.log(code)
  //kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=84b84bfba356cb44c40c484007117fe2&redirect_uri=http://localhost:8082/login/oauth2/token/kakao&code=Iu1SPknUUJ3wyWtGI-MFOBrd8Aclf-4-JfWQmLK1vlyP5vrIECM--U8l3y8KPXQRAAABjjVMFv__A_o_BVb6-Q

  const onClick = () => {
    const kakaoURL = `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=http://localhost:8082/login/oauth2/token/kakao&code=${code}`
    window.location.href = kakaoURL
  }

  return (
    <div>
      <button onClick={onClick}>임시 카카오 버튼</button>
    </div>
  )
}

export default KakaoRedirectHandler
