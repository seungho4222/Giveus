import { HomeReviewType } from '@/types/reviewType'
import { formatAmount } from '@utils/format'
import * as r from '@components/home/HomeReview/ReviewItem.styled'

const ReviewItem = (props: { item: HomeReviewType }) => {
  const { item } = props

  return (
    <r.Container>
      {item.existUsageHistory && <r.Badge>진료비 내역 공개</r.Badge>}
      <r.Image src={item.imageUrl || '/img/img_review.png'} alt="" />
      <r.TitleWrap>
        <h3>{item.title}</h3>
        <span>{item.memberFundingCount}명 참여</span>
      </r.TitleWrap>
      <r.Amount>{formatAmount(item.targetAmount)}원</r.Amount>
    </r.Container>
  )
}

export default ReviewItem
