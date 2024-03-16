import * as d from '@/components/funding/FundingDetail/DetailMain.styled'
import { percent, dDay } from '@/utils/fundingInfoAdd'
import { useRecoilValue } from 'recoil'
import { fundingDetailState } from '@/stores/fundingState'
import Modal from '@/common/Modal'
import { useState } from 'react'
import Donate from '../Donate'
import FullButton from '@/common/FullButton'
import Review from '../Review'

const DetailMain = () => {
  const fundingDetail = useRecoilValue(fundingDetailState)
  const memberFunding: boolean = true // test
  const review: boolean = true // test

  const [open, setOpen] = useState<boolean>(false)

  return (
    <d.Container>
      <d.DetailInfo>
        <d.Period>
          모금기간 &nbsp;{fundingDetail.startDate} ~ {fundingDetail.endDate}
        </d.Period>
        <d.Wrap>
          <d.TotalAmount>
            {fundingDetail.totalAmount.toLocaleString('ko-KR')}원
          </d.TotalAmount>
          <d.Dday>{dDay(fundingDetail)}</d.Dday>
        </d.Wrap>
        <d.Progress>
          <d.ProgressStatus $width={percent(fundingDetail)}></d.ProgressStatus>
        </d.Progress>
        <d.Wrap>
          <d.Percent>{percent(fundingDetail)} 달성</d.Percent>
          <d.TargetAmount>
            {fundingDetail.targetAmount.toLocaleString('ko-KR')}원
          </d.TargetAmount>
        </d.Wrap>
        <d.Note>* 모금 종료시 전액 일시 전달됩니다</d.Note>
      </d.DetailInfo>
      <d.DetailDesc>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis
        numquam non quod corporis cum, facere vero aliquam natus consequatur
        omnis! Optio vitae tempore ipsum assumenda, voluptas debitis dolores
        sunt adipisci?
      </d.DetailDesc>
      <d.Button>
        <FullButton
          text={
            memberFunding
              ? review
                ? '후기 확인하기'
                : '작성된 후기가 없습니다'
              : '후원하기'
          }
          disabled={memberFunding && !review}
          onClick={() => setOpen(true)}
        />
      </d.Button>
      <Modal
        name={'후기'}
        children={memberFunding && review ? <Review /> : <Donate />}
        open={open}
        onClose={() => setOpen(false)}
      />
    </d.Container>
  )
}

export default DetailMain
