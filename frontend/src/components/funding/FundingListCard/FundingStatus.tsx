import * as s from '@components/funding/FundingListCard/FundingStatus.styled'
import { themeState } from '@stores/theme'
import { FundingType } from '@/types/fundingType'
import { formatAmount } from '@utils/format'
import { percent, dDay } from '@utils/fundingInfoAdd'
import { useRecoilValue } from 'recoil'

const FundingStatus = (props: { data: FundingType }) => {
  const theme = useRecoilValue(themeState)
  const { data } = props

  return (
    <s.Container>
      <s.Wrap>
        <s.Text>모금액 {formatAmount(data.totalAmount)}원</s.Text>
        <s.Text>
          <s.Percent>{percent(data)}</s.Percent> {dDay(data.endDate)}
        </s.Text>
      </s.Wrap>
      <s.Progress $theme={theme}>
        <s.ProgressStatus $width={percent(data)} />
      </s.Progress>
    </s.Container>
  )
}

export default FundingStatus
