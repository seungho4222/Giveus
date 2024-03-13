import * as D from '@/components/funding/FundingDetail/DetailMain.styled'
import BottomButton from '@/common/BottomButton'
import { percent, dDay } from '@/utils/fundingInfoAdd'
import { useRecoilValue } from 'recoil'
import { fundingDetailState } from '@/recoil/fundingState'

const DetailMain = () => {
  const fundingDetail = useRecoilValue(fundingDetailState)

  return (
    <D.Container>
      <D.DetailInfo>
        <D.Period>
          모금기간 &nbsp;{fundingDetail.start_date} ~ {fundingDetail.end_date}
        </D.Period>
        <D.Wrap>
          <D.TotalAmount>
            {fundingDetail.total_amount.toLocaleString('ko-KR')}원
          </D.TotalAmount>
          <D.Dday>{dDay(fundingDetail)}</D.Dday>
        </D.Wrap>
        <D.Progress>
          <D.ProgressStatus $width={percent(fundingDetail)}></D.ProgressStatus>
        </D.Progress>
        <D.Wrap>
          <D.Percent>{percent(fundingDetail)} 달성</D.Percent>
          <D.TargetAmount>
            {fundingDetail.target_amount.toLocaleString('ko-KR')}원
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
      <BottomButton text={'후원하기'} />
    </D.Container>
  )
}

export default DetailMain
