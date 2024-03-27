import * as h from '@components/home/HomeReview/HomeReview.styled'
import ReviewItem from './ReviewItem'

const Index = () => {
  return (
    <h.Container>
      <h.Title>기부 후기를 확인해보세요</h.Title>
      <h.Wrap>
        <ReviewItem />
        <ReviewItem />
      </h.Wrap>
    </h.Container>
  )
}

export default Index
