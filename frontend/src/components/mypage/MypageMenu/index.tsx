import { mypageMenuList } from '@assets/data/mypageMenuList'
import * as m from '@components/mypage/MypageMenu/MypageMenu.styled'
import { useNavigate } from 'react-router-dom'

const Index = () => {
  const navigate = useNavigate()

  const goPage = (url: string) => navigate(url)

  return (
    <m.Container>
      <m.Ul>
        {mypageMenuList.map(item => (
          <m.li key={item.key} onClick={() => goPage(item.url)}>
            <img src={item.imgSrc} />
            <span>{item.name}</span>
          </m.li>
        ))}
      </m.Ul>
    </m.Container>
  )
}

export default Index
