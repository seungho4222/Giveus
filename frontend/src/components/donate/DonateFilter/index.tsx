import { myDonateListFilterState } from '@/stores/donate'
import { PointsFilterType } from '@/types/mypageType'
import * as d from '@components/donate/DonateFilter/DonateFilter.styled'
import { useRecoilValue } from 'recoil'

const Index = (props: PointsFilterType) => {
  const { setOpen } = props
  const myDonateListFilter = useRecoilValue(myDonateListFilterState)

  // modal open
  const modalOpen = () => setOpen(true)

  return (
    <d.Container>
      <d.Wrap onClick={modalOpen}>
        <div>
          {myDonateListFilter.startDate} ~ {myDonateListFilter.endDate} ∙
          {myDonateListFilter.status}
        </div>
        <img src="/icon/icon_arrow_bottom_gray.png" alt="" />
      </d.Wrap>
    </d.Container>
  )
}

export default Index
