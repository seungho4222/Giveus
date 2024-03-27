import * as h from '@components/home/HomeContributors/HomeContributors.styled'
import ContributorInfo from '@components/home/HomeContributors/ContributorInfo'
import { useQuery } from '@tanstack/react-query'
import { RecentParticipantType } from '@/types/fundingType'
import { fetchRecentParticipants } from '@apis/funding'
import { useNavigate } from 'react-router-dom'

const Index = () => {
  const { data } = useQuery<RecentParticipantType[]>({
    queryKey: ['fetchRecentParticipants'],
    queryFn: () => fetchRecentParticipants(),
  })

  const navigate = useNavigate()

  const goFunding = () => navigate('/funding')

  return (
    <h.Container>
      <h.Title>실시간 기부 참여자</h.Title>
      <h.Wrap>
        {data &&
          data.map(item => (
            <ContributorInfo key={item.memberFundingNo} item={item} />
          ))}
        <h.Line />
        <h.Button onClick={goFunding}>
          지금 바로 기부 참여하기
          <img src="/icon/icon_arrow_right_gray.png" alt="" />
        </h.Button>
      </h.Wrap>
    </h.Container>
  )
}

export default Index
