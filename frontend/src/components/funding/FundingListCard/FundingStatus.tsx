import * as S from '@/components/funding/FundingListCard/FundingStatus.styled'
import { FundingType } from '@/types/fundingType'

const FundingStatus = (props: { data: FundingType }) => {
  const { data } = props

  function percent(): number {
    return Math.round((data.total_amount / data.target_amount) * 100)
  }

  function dDay(): number {
    const today = new Date()
    const dday = new Date(data.end_date)
    const gap = dday.getTime() - today.getTime()

    return Math.ceil(gap / (1000 * 60 * 60 * 24))
  }

  return (
    <S.Container>
      <S.Wrap>
        <S.Text>모금액 {data.total_amount.toLocaleString('ko-KR')}원</S.Text>
        <S.Text>
          <S.Percent>{percent()}%</S.Percent> D-{dDay()}
        </S.Text>
      </S.Wrap>
      <S.Progress>
        <S.ProgressStatus $width={`${percent()}%`} />
      </S.Progress>
    </S.Container>
  )
}

export default FundingStatus
