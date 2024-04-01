import { fetchReviewAll } from '@apis/review'
import { HomeReviewType } from '@/types/reviewType'
import * as h from '@components/home/HomeReview/HomeReview.styled'
import ReviewItem from '@components/home/HomeReview/ReviewItem'
import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import Modal from '@/common/Modal'
import Review from '@/components/funding/Review'

const Index = () => {
  const [reviewOpen, setReviewOpen] = useState<boolean>(false)
  const [reviewNum, setReviewNum] = useState<number>(0)

  const handlerClick = (num: number) => {
    setReviewNum(num)
    setReviewOpen(true)
  }

  const { data, error } = useQuery<HomeReviewType[]>({
    queryKey: ['fetchReviewAll'],
    queryFn: () => fetchReviewAll(),
  })

  if (error) return <>error</>
  return (
    <>
      <h.Container>
        <h.Title>기부 후기를 확인해보세요</h.Title>
        <h.Wrap>
          {data &&
            data.map(item => (
              <div
                key={item.reviewNo}
                onClick={() => handlerClick(item.fundingNo)}
              >
                <ReviewItem item={item} />
              </div>
            ))}
        </h.Wrap>
      </h.Container>
      {reviewOpen && (
        <Modal name="후기" onClose={() => setReviewOpen(false)}>
          <Review fundingNo={reviewNum} />
        </Modal>
      )}
    </>
  )
}

export default Index
