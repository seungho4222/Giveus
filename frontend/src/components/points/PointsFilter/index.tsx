import { PointsFilterType } from '@/types/mypageType'
import * as p from '@components/points/PointsFilter/PointsFilter.styled'

const Index = (props: PointsFilterType) => {
  const { setOpen, startDate, endDate, type } = props

  // modal open
  const modalOpen = () => setOpen(true)

  return (
    <p.Container>
      <p.Wrap onClick={modalOpen}>
        <div>
          {startDate} ~ {endDate} ∙ {type}
        </div>
        <img src="/icon/icon_arrow_bottom_gray.png" alt="" />
      </p.Wrap>
    </p.Container>
  )
}

export default Index
