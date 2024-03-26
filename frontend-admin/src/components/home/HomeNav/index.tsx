import * as h from '@components/home/HomeNav/HomeNav.styled'
import { navbarList } from '@/assets/data/navbarList'
import { useNavigate } from 'react-router'
import { useRecoilState } from 'recoil'
import { currentNavState } from '@/store/common'
import { navType } from '@/types/navType'

const index = () => {
  const navigate = useNavigate()
  const [currentNav, setCurrentNav] = useRecoilState(currentNavState)

  const HandlerNav = (item: navType) => {
    setCurrentNav({ name: item.name, url: item.url })
    navigate(item.url)
  }

  return (
    <h.Container>
      <h.Logo>(로고) GIVEUS</h.Logo>
      {navbarList.map((item, idx) => (
        <>
          {idx === 3 ? <h.Category>ACCOUNT PAGES</h.Category> : ''}
          <h.Button
            key={item.name}
            onClick={() => HandlerNav(item)}
            $active={currentNav.url === item.url}
          >
            <h.IconBox $active={currentNav.url === item.url}>
              <h.Icon
                src={
                  currentNav.url === item.url ? item.activeImgSrc : item.imgSrc
                }
              />
            </h.IconBox>
            <h.Text $active={currentNav.url === item.url}>{item.name}</h.Text>
          </h.Button>
        </>
      ))}
      <h.HelpBox>
        <h.IconBox $active={false}>
          <h.Icon src="/icon/icon_question_blue.png" />
        </h.IconBox>
        <h.Desc>도움이 필요하신가요?</h.Desc>
        <h.SubDesc>저희가 도와드릴께요</h.SubDesc>
        <h.HelpButton>GIVEUS</h.HelpButton>
      </h.HelpBox>
    </h.Container>
  )
}

export default index
