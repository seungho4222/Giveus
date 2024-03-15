import { loginSuccess } from '@apis/auth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginRedirectHandler = () => {
  const url = new URL(window.location.href).searchParams

  const navigate = useNavigate()

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
      accessToken &&
        loginSuccess({ accessToken }).then(res => {
          console.log('login success', res)
          navigate('/')
        })
    }
  }

  return (
    <div>
      <div>login redirect page</div>
    </div>
  )
}

export default LoginRedirectHandler
