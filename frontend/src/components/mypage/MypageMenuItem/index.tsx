import { themeState } from '@stores/theme'
import { MypageMenuItemType } from '@/types/mypageType'
import * as m from '@components/mypage/MypageMenuItem/MypageMenuItem.styled'
import { useRecoilValue } from 'recoil'
import { useNavigate } from 'react-router-dom'

const Index = (props: MypageMenuItemType) => {
  const theme = useRecoilValue(themeState)
  const { title, imgSrc, imgSrc_dark, url, text, width, height, onClick } =
    props

  const navigate = useNavigate()

  const goPage = () => url && navigate(url)

  return (
    <m.Container onClick={url ? goPage : onClick}>
      <m.Left>
        <m.ImageWrap>
          <img
            src={theme ? imgSrc : imgSrc_dark}
            alt=''
            width={width}
            height={height}
          />
        </m.ImageWrap>
        <span>{title}</span>
      </m.Left>
      <m.Right>
        {url ? (
          <img
            src={
              '/icon/icon_arrow_right_' + (theme ? 'black' : 'white') + '.png'
            }
            alt=""
          />
        ) : (
          text
        )}
      </m.Right>
    </m.Container>
  )
}

export default Index
