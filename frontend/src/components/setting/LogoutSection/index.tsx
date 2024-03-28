import { userState } from '@stores/user'
import { useNavigate } from 'react-router-dom'
import { useResetRecoilState } from 'recoil'
import * as l from '@components/setting/LogoutSection/LogoutSection.styled'

const Index = () => {
  const navigate = useNavigate()

  const resetUserState = useResetRecoilState(userState)

  const logout = () => {
    resetUserState()
    navigate('/login')
  }

  return (
    <l.Container>
      <l.Button onClick={logout}>로그아웃</l.Button>
    </l.Container>
  )
}

export default Index
