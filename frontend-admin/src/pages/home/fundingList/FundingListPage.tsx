import { fetchFundingList } from '@/apis/funding'
import Table from '@/components/fundingList/Table'
import { fundingState } from '@/store/funding'
import * as f from '@pages/home/fundingList/FundingListPage.styled'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useMemo } from 'react'
import { useSetRecoilState } from 'recoil'
import { dummyColumns, dummyData } from './data'

const FundingListPage = () => {
  const setFunding = useSetRecoilState(fundingState)

  const { data, isLoading } = useQuery({
    queryKey: ['FundingList'],
    queryFn: () => fetchFundingList(1),
  })

  useEffect(() => {
    !isLoading && setFunding(data)
    console.log(data);
  }, [data, isLoading])

  const columns = useMemo(() => dummyColumns, [])
  const dataa = useMemo(() => dummyData, [])

  return (
    <f.Container>
      <Table columns={columns} data={dataa} />
    </f.Container>
  )
}

export default FundingListPage
