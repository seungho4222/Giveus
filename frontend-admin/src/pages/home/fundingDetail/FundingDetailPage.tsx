import { fetchFundingDetail } from '@/apis/funding'
import DetailInfo from '@/components/fundingDetail/DetailInfo'
import DetailReg from '@/components/fundingDetail/DetailReg'
import { fundingDetailState, selectedFundingNoState } from '@/store/funding'
import * as f from '@pages/home/fundingDetail/FundingDetailPage.styled'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'

const FundingDetailPage = () => {
  const selectedFundingNo = useRecoilValue(selectedFundingNoState)
  const setFundingDetail = useSetRecoilState(fundingDetailState)

  const { data, isLoading } = useQuery({
    queryKey: ['FundingDetail'],
    queryFn: () => fetchFundingDetail(selectedFundingNo),
  })

  useEffect(() => {
    !isLoading && setFundingDetail(data)
  }, [data, isLoading])

  return (
    <f.Container>
      <DetailReg />
      <DetailInfo />
    </f.Container>
  )
}

export default FundingDetailPage
