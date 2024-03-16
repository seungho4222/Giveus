import * as S from '@/components/funding/FundingListCard/FundingStatus.styled'
import { FundingType } from '@/types/fundingType'
import { percent, dDay } from '@/utils/fundingInfoAdd'

const FundingStatus = (props: { data: FundingType }) => {
  const { data } = props

  return (
    <S.Container>
      <S.Wrap>
        <S.Text>모금액 {data.totalAmount.toLocaleString('ko-KR')}원</S.Text>
        <S.Text>
          <S.Percent>{percent(data)}</S.Percent> {dDay(data)}
        </S.Text>
      </S.Wrap>
      <S.Progress>
        <S.ProgressStatus $width={percent(data)} />
      </S.Progress>
    </S.Container>
  )
}

export default FundingStatus
