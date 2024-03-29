import * as d from '@/components/funding/FundingDetail/DetailMain.styled'
import { percent, dDay } from '@/utils/fundingInfoAdd'
import { useRecoilValue } from 'recoil'
import { fundingDetailState } from '@/stores/funding'
import Modal from '@/common/Modal'
import { useState } from 'react'
import Donate from '../Donate'
import FullButton from '@/common/FullButton'
import Review from '../Review'
import { formatAmount } from '@utils/format'
import { themeState } from '@stores/theme'

const DetailMain = () => {
  const theme = useRecoilValue(themeState)
  const fundingDetail = useRecoilValue(fundingDetailState)
  const review: boolean = true // test
  const [donateOpen, setDonateOpen] = useState<boolean>(false)
  const [reviewOpen, setReviewOpen] = useState<boolean>(false)

  const statusButton = () =>
    fundingDetail.status === '진행중' ? (
      <FullButton
        text="후원하기"
        onClick={() => setDonateOpen(true)}
        disabled={false}
      />
    ) : (
      <FullButton
        text={review ? '후기 확인하기' : '작성된 후기가 없습니다'}
        onClick={() => setReviewOpen(true)}
        disabled={!review}
      />
    )

  return (
    <d.Container>
      <d.DetailInfo>
        <d.Period>
          모금기간 &nbsp;{fundingDetail.startDate} ~ {fundingDetail.endDate}
        </d.Period>
        <d.Wrap>
          <d.TotalAmount>
            {formatAmount(fundingDetail.totalAmount)}원
          </d.TotalAmount>
          <d.Dday>{dDay(fundingDetail.endDate)}</d.Dday>
        </d.Wrap>
        <d.Progress $theme={theme}>
          <d.ProgressStatus $width={percent(fundingDetail)}></d.ProgressStatus>
        </d.Progress>
        <d.Wrap>
          <d.Percent>{percent(fundingDetail)} 달성</d.Percent>
          <d.TargetAmount $theme={theme}>
            {formatAmount(fundingDetail.targetAmount)}원
          </d.TargetAmount>
        </d.Wrap>
        <d.Note>* 모금 종료시 전액 일시 전달됩니다</d.Note>
      </d.DetailInfo>
      <d.DetailDesc>{fundingDetail.content}</d.DetailDesc>
      <d.Button>{statusButton()}</d.Button>
      {donateOpen && (
        <Modal name="후원하기" onClose={() => setDonateOpen(false)}>
          <Donate />
        </Modal>
      )}
      {reviewOpen && (
        <Modal name="후기" onClose={() => setReviewOpen(false)}>
          <Review />
        </Modal>
      )}
    </d.Container>
  )
}

export default DetailMain
