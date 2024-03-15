import { mypageMenuList } from '@assets/data/mypageMenuList'
import * as m from '@components/mypage/MypageMenu/MypageMenu.styled'

const Index = () => {
  return (
    <m.Container>
      <m.Ul>
        {mypageMenuList.map(item => (
          <m.li key={item.key}>
            <img src={item.imgSrc} />
            <span>{item.name}</span>
          </m.li>
        ))}
      </m.Ul>
    </m.Container>
  )
}

export default Index
