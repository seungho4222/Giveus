import * as s from '@/components/funding/FundingListCard/FundingStatus.styled'
import { FundingType } from '@/types/fundingType'
import { formatAmount } from '@/utils/format'
import { percent, dDay } from '@/utils/fundingInfoAdd'

const FundingStatus = (props: { data: FundingType }) => {
  const { data } = props

  return (
    <s.Container>
      <s.Wrap>
        <s.Text>모금액 {formatAmount(data.totalAmount)}원</s.Text>
        <s.Text>
          <s.Percent>{percent(data)}</s.Percent> {dDay(data)}
        </s.Text>
      </s.Wrap>
      <s.Progress>
        <s.ProgressStatus $width={percent(data)} />
      </s.Progress>
    </s.Container>
  )
}

export default FundingStatus
