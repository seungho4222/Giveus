import * as m from '@components/mypage/MypagePrevHeader/MypagePrevHeader.styled'
import { useNavigate } from 'react-router-dom'

const Index = (props: { title: string }) => {
  const { title } = props

  const navigate = useNavigate()

  const goMypage = () => navigate('/mypage')

  return (
    <m.Container $isDonate={title === '후원 내역'}>
      {title === '후원 내역' ? (
        <m.Image src="/icon/icon_arrow_white.png" alt="" onClick={goMypage} />
      ) : (
        <m.Image src="/icon/icon_arrow_black.png" alt="" onClick={goMypage} />
      )}
      <m.Title>{title}</m.Title>
      <m.EmptyBox />
    </m.Container>
  )
}

export default Index
