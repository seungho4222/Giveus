import { formatAmount } from '@/utils/format'
import * as r from '@components/home/HomeReview/ReviewItem.styled'

const ReviewItem = () => {
  return (
    <r.Container>
      <r.Badge>진료비 내역 공개</r.Badge>
      <r.Image src="/img/img_review.png" alt="" />
      <r.TitleWrap>
        <h3>소아암 6세(남) 펀딩</h3>
        <span>30명 참여</span>
      </r.TitleWrap>
      <r.Amount>{formatAmount(5000000)}원</r.Amount>
    </r.Container>
  )
}

export default ReviewItem
