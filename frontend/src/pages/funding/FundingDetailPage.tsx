import { fetchFundingDetail } from '@/apis/funding'
import FundingDetail from '@/components/funding/FundingDetail'
import { fundingDetailState } from '@/stores/funding'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'

const FundingDetailPage = () => {
  const { id } = useParams()
  const setFundingDetail = useSetRecoilState(fundingDetailState)

  const { data, isLoading } = useQuery({
    queryKey: ['FundingDetail'],
    queryFn: () => fetchFundingDetail(Number(id)),
  })

  useEffect(() => {
    !isLoading && setFundingDetail(data)
  }, [data, isLoading])

  return <>{!isLoading && <FundingDetail data={data} />}</>
}

export default FundingDetailPage
