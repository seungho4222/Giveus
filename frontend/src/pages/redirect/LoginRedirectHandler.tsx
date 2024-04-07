import { userState } from '@stores/user'
import { fetchUserInfo, loginSuccess } from '@apis/auth'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import * as l from '@pages/redirect/LoginRedirectHandler.styled'
import { handleAllowNotification } from '@/services/notificationPermission'

const LoginRedirectHandler = () => {
  const setUserState = useSetRecoilState(userState)
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
      const accessToken = url.get('accessToken')
      accessToken &&
        loginSuccess({ accessToken })
          .then(() =>
            fetchUserInfo().then(res => {
              setUserState(res.data.data)
              handleAllowNotification(res.data.data.memberNo)
              navigate('/')
            }),
          )
          .catch(err => console.log('로그인 실패', err))
    }
  }

  return <l.Container />
}

export default LoginRedirectHandler
