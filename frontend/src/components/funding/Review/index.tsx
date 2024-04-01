import { fetchReview } from '@/apis/review'
import * as r from '@/components/funding/Review/Review.styled'
import { useQuery } from '@tanstack/react-query'

const Index = (props: { fundingNo: number }) => {
  const { fundingNo } = props

  const { data, isLoading } = useQuery({
    queryKey: ['fetchReview'],
    queryFn: () => fetchReview(fundingNo),
  })

  return (
    <>
      {!isLoading && (
        <r.Container>
          <r.Top>
            <r.Img src={data.url || '/img/img_review.png'} />
          </r.Top>
          <r.Wrap>
            <r.Title>{data.title}</r.Title>
            <r.Desc>{data.content}</r.Desc>
          </r.Wrap>
        </r.Container>
      )}
    </>
  )
}

export default Index
