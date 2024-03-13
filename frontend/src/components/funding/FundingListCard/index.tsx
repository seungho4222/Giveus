import * as C from '@/components/funding/FundingListCard/FundingListCard.styled'
import FundingInfo from './FundingInfo'
import FundingStatus from './FundingStatus'
import { FundingType } from '@/types/fundingType'
import { Link } from 'react-router-dom'

const Index = (props: { data: FundingType }) => {
  const { data } = props

  return (
    <Link to={`/funding/${data.id}`}>
      <C.Container>
        <C.Img src="/img/img_data.png" alt="" />
        <C.Wrap>
          <FundingInfo data={data} />
          <FundingStatus data={data} />
        </C.Wrap>
      </C.Container>
    </Link>
  )
}

export default Index
