import { defaultUser, userState } from '@stores/user'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'

const SettingPage = () => {
  const navigate = useNavigate()

  const setUserState = useSetRecoilState(userState)

  const logout = () => {
    setUserState(defaultUser)
    navigate('/login')
  }

  return (
    <div>
      <div>setting</div>
      <button onClick={logout}>로그아웃</button>
    </div>
  )
}

export default SettingPage
