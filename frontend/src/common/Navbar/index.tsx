import { navbarList } from '@assets/data/navbarList'
import * as n from '@common/Navbar/Navbar.styled'

const Index = () => {
  return (
    <n.Container>
      <n.Wrap>
        {navbarList.map(item => (
          <n.Item key={item.label} to={item.url}>
            <n.Icon
              src={item.imgSrc}
              alt=""
              width={item.width}
              height={item.height}
            />
            <n.Label>{item.label}</n.Label>
          </n.Item>
        ))}
      </n.Wrap>
    </n.Container>
  )
}

export default Index
