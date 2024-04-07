import { themeState } from '@stores/theme'
import * as h from '@components/home/HomeHeader/HomeHeader.styled'
import { useRecoilValue } from 'recoil'

const Index = () => {
  const theme = useRecoilValue(themeState)
  return (
    <h.Container $theme={theme}>
      <h.Wrap>
        <h.Logo>
          <img src="/img/img_logo.png" alt="logo" />
        </h.Logo>
      </h.Wrap>
    </h.Container>
  )
}

export default Index
