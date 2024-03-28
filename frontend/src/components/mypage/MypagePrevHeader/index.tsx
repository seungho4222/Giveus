import { themeState } from '@stores/theme'
import * as m from '@components/mypage/MypagePrevHeader/MypagePrevHeader.styled'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

const Index = (props: { title: string; url: string }) => {
  const theme = useRecoilValue(themeState)
  const { title, url } = props

  const navigate = useNavigate()

  const goPage = () => navigate(url)

  return (
    <m.Container $isDonate={title === '후원 내역'}>
      <m.Image
        src={
          theme === 0
            ? '/icon/icon_arrow_white.png'
            : '/icon/icon_arrow_black.png'
        }
        alt=""
        onClick={goPage}
      />
      <m.Title>{title}</m.Title>
      <m.EmptyBox />
    </m.Container>
  )
}

export default Index
