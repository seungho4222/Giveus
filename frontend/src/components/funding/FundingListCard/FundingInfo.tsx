import * as i from '@/components/funding/FundingListCard/FundingInfo.styled'
import { FundingType } from '@/types/fundingType'

const FundingInfo = (props: { data: FundingType }) => {
  const { data } = props

  return (
    <i.Container>
      <i.Wrap>
        <i.Title>{data.title}</i.Title>
        <i.Period>
          {data.startDate} ~ {data.endDate}
        </i.Period>
      </i.Wrap>
      <i.Status $status={data.status === '진행중'}>{data.status}</i.Status>
    </i.Container>
  )
}

export default FundingInfo
