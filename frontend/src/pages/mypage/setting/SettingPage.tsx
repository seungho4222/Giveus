import { userState } from '@stores/user'
import { useNavigate } from 'react-router-dom'
import { useResetRecoilState } from 'recoil'

const SettingPage = () => {
  const navigate = useNavigate()

  const resetUserState = useResetRecoilState(userState)

  const logout = () => {
    resetUserState()
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
