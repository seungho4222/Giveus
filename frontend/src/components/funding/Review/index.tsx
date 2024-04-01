import { fetchReview } from '@/apis/review'
import * as r from '@/components/funding/Review/Review.styled'
import { fundingDetailState } from '@/stores/funding'
import { useQuery } from '@tanstack/react-query'
import { useRecoilValue } from 'recoil'

const Index = () => {
  const fundingDetail = useRecoilValue(fundingDetailState)

  const { data, isLoading } = useQuery({
    queryKey: ['fetchReview'],
    queryFn: () => fetchReview(fundingDetail.fundingNo),
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
