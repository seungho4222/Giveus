import { loginSuccess } from '@apis/auth'
import { useEffect } from 'react'

const LoginRedirectHandler = () => {
  const url = new URL(window.location.href).searchParams

  useEffect(() => {
    setStorage()
  }, [url])

  const setStorage = () => {
    const type = url.get('type')

    if (type == 'register') {
      // 회원가입 필요
      const provider = url.get('provider')
      const email = url.get('email')
      localStorage.setItem(
        'register',
        JSON.stringify({ provider: provider, email: email }),
      )
      window.location.href = '/signup'
    } else {
      // 로그인 성공
      localStorage.removeItem('accessToken')
      const accessToken = url.get('accessToken')
      accessToken && loginSuccess({ accessToken })
    }
  }

  // http://localhost:5173/login/oauth2?type=register&provider=kakao&email=jihyeon2474@gmail.com
  // http://localhost:5173/login/oauth2?type=login&accessToken=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIzMzg2NTgxODU2IiwicHJvdmlkZXIiOiJrYWthbyIsImlhdCI6MTcxMDMxMzk4MSwiZXhwIjoxNzEwMzE3NTgxfQ.X_5k1v3dvPR7BXE7B9saULkd4Y2ErvXKchITICXNesc

  return (
    <div>
      <button>임시 카카오 버튼</button>
      <div>login redirect page</div>
    </div>
  )
}

export default LoginRedirectHandler
