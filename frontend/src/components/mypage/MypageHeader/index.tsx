import { themeState } from '@stores/theme'
import * as m from '@components/mypage/MypageHeader/MypageHeader.styled'
import { useRecoilValue } from 'recoil'

const Index = () => {
  const theme = useRecoilValue(themeState)
  return <m.Container $theme={theme}>마이</m.Container>
}

export default Index
