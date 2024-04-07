import { fetchFundingParticipants } from '@/apis/funding'
import DonorList from '@/components/funding/FundingDetail/DonorList'
import { donerListState } from '@/stores/funding'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'

const DonorListPage = () => {
  const { id } = useParams()
  const setDonerList = useSetRecoilState(donerListState)

  const { data, isLoading } = useQuery({
    queryKey: ['FundingParticipants'],
    queryFn: () => fetchFundingParticipants(Number(id)),
  })

  useEffect(() => {
    !isLoading && setDonerList(data)
  }, [data, isLoading])

  return (
    <>
      <DonorList />
    </>
  )
}

export default DonorListPage
