import * as h from '@components/home/HomeSoonOver/HomeSoonOver.styled'
import SoonOverItem from './SoonOverItem'

const Index = () => {
  return (
    <h.Container>
      <h.Title>곧 종료되는 펀딩</h.Title>
      <h.Wrap>
        <SoonOverItem />
        <SoonOverItem />
        <SoonOverItem />
      </h.Wrap>
    </h.Container>
  )
}

export default Index
