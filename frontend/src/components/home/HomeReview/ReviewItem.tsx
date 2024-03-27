import * as r from '@components/home/HomeReview/ReviewItem.styled'

const ReviewItem = () => {
  return (
    <r.Container>
      <r.Image src="/img/img_review.png" alt="" />
      <div>
        <h3>펀딩 제목</h3>
        <span>30명 참여</span>
      </div>
      <h3>펀딩 총 금액</h3>
    </r.Container>
  )
}

export default ReviewItem
