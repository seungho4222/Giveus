import { myPointListFilterState } from '@stores/point'
import { PointsFilterType } from '@/types/mypageType'
import * as p from '@components/points/PointsFilter/PointsFilter.styled'
import { useRecoilValue } from 'recoil'

const Index = (props: PointsFilterType) => {
  const { setOpen } = props
  const myPointListFilter = useRecoilValue(myPointListFilterState)

  // modal open
  const modalOpen = () => setOpen(true)

  return (
    <p.Container>
      <p.Wrap onClick={modalOpen}>
        <div>
          {myPointListFilter.startDate} ~ {myPointListFilter.endDate} ∙
          {myPointListFilter.type}
        </div>
        <img src="/icon/icon_arrow_bottom_gray.png" alt="" />
      </p.Wrap>
    </p.Container>
  )
}

export default Index
