import * as I from '@/components/funding/FundingListCard/FundingInfo.styled'
import { FundingType } from '@/types/funding'

const FundingInfo = (props: { data: FundingType }) => {
  const { data } = props

  return (
    <I.Container>
      <I.Wrap>
        <I.Title>{data.title}</I.Title>
        <I.Period>
          {data.start_date} ~ {data.end_date}
        </I.Period>
      </I.Wrap>
      <I.Status>{data.status}</I.Status>
    </I.Container>
  )
}

export default FundingInfo
