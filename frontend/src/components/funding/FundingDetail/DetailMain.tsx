import * as D from '@/components/funding/FundingDetail/DetailMain.styled'
import { FundingType } from '@/types/fundingType'
import { percent, dDay } from '@/utils/fundingInfoAdd'

const MainDesc = (props: { data: FundingType }) => {
  const { data } = props

  return (
    <D.Container>
      <D.DetailInfo>
        <D.Period>
          모금기간 &nbsp;{data.start_date} ~ {data.end_date}
        </D.Period>
        <D.Wrap>
          <D.TotalAmount>
            {data.total_amount.toLocaleString('ko-KR')}원
          </D.TotalAmount>
          <D.Dday>{dDay(data)}</D.Dday>
        </D.Wrap>
        <D.Progress>
          <D.ProgressStatus $width={percent(data)}></D.ProgressStatus>
        </D.Progress>
        <D.Wrap>
          <D.Percent>{percent(data)} 달성</D.Percent>
          <D.TargetAmount>
            {data.target_amount.toLocaleString('ko-KR')}원
          </D.TargetAmount>
        </D.Wrap>
        <D.Note>* 모금 종료시 전액 일시 전달됩니다</D.Note>
      </D.DetailInfo>
      <D.DetailDesc>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
        numquam non quod corporis cum, facere vero aliquam natus consequatur
        omnis! Optio vitae tempore ipsum assumenda, voluptas debitis dolores
        sunt adipisci?
      </D.DetailDesc>
    </D.Container>
  )
}

export default MainDesc
