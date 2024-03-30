import { fetchReviewAll } from '@apis/review'
import { HomeReviewType } from '@/types/reviewType'
import * as h from '@components/home/HomeReview/HomeReview.styled'
import ReviewItem from '@components/home/HomeReview/ReviewItem'
import { useQuery } from '@tanstack/react-query'

const Index = () => {
  const { data, error } = useQuery<HomeReviewType[]>({
    queryKey: ['fetchReviewAll'],
    queryFn: () => fetchReviewAll(),
  })

  if (error) return <>error</>
  return (
    <h.Container>
      <h.Title>기부 후기를 확인해보세요</h.Title>
      <h.Wrap>
        {data &&
          data.map(item => <ReviewItem key={item.reviewNo} item={item} />)}
      </h.Wrap>
    </h.Container>
  )
}

export default Index
