import * as h from '@components/home/HomeSoonOver/HomeSoonOver.styled'
import SoonOverItem from './SoonOverItem'
import { fetchSoonOver } from '@apis/funding'
import { useQuery } from '@tanstack/react-query'
import { FundingType } from '@/types/fundingType'

const Index = () => {
  const { data } = useQuery<FundingType[]>({
    queryKey: ['fetchSoonOver'],
    queryFn: () => fetchSoonOver(),
  })

  return (
    <h.Container>
      <h.Title>곧 종료되는 펀딩</h.Title>
      <h.Wrap>
        {data &&
          data.map(item => <SoonOverItem key={item.fundingNo} item={item} />)}
      </h.Wrap>
    </h.Container>
  )
}

export default Index
