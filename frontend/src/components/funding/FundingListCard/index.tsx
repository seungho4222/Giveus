import * as C from '@/components/funding/FundingListCard/FundingListCard.styled'
import FundingInfo from './FundingInfo'
import FundingStatus from './FundingStatus'
import { FundingType } from '@/types/funding'

const Index = (props: { data: FundingType }) => {
  const { data } = props

  return (
    <C.Container>
      <C.Img src="/image/image_data.png" alt="" />
      <C.Wrap>
        <FundingInfo data={data} />
        <FundingStatus data={data} />
      </C.Wrap>
    </C.Container>
  )
}

export default Index
