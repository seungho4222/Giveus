import { themeState } from '@stores/theme'
import { mypageMenuList } from '@assets/data/mypageMenuList'
import * as m from '@components/mypage/MypageMenu/MypageMenu.styled'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

const Index = () => {
  const navigate = useNavigate()
  const theme = useRecoilValue(themeState)

  const goPage = (url: string) => navigate(url)

  return (
    <m.Container>
      <m.Ul>
        {mypageMenuList.map(item => (
          <m.li key={item.key} onClick={() => goPage(item.url)}>
            <m.ImageWrap>
              <img
                src={theme === 1 ? item.imgSrc : item.imgSrc_dark}
                width={item.width}
                height={item.height}
              />
            </m.ImageWrap>
            <span>{item.name}</span>
          </m.li>
        ))}
      </m.Ul>
    </m.Container>
  )
}

export default Index
