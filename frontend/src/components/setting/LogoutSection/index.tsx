import { userState } from '@stores/user'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import * as l from '@components/setting/LogoutSection/LogoutSection.styled'
import { themeState } from '@stores/theme'

const Index = () => {
  const theme = useRecoilValue(themeState)
  const navigate = useNavigate()

  const resetUserState = useResetRecoilState(userState)

  const logout = () => {
    resetUserState()
    navigate('/login')
  }

  return (
    <l.Container>
      <l.Button onClick={logout} $theme={theme}>
        로그아웃
      </l.Button>
    </l.Container>
  )
}

export default Index
