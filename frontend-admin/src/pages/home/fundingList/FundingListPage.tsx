import { fetchFundingList } from '@/apis/funding'
import Table from '@/components/fundingList/Table'
import { fundingState } from '@/store/funding'
import * as f from '@pages/home/fundingList/FundingListPage.styled'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useMemo } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { columnsData } from './data'
import { adminState } from '@/store/user'
import { FundingType } from '@/types/fundingType'

const FundingListPage = () => {
  const [funding, setFunding] = useRecoilState(fundingState)
  const admin = useRecoilValue(adminState)

  const { data, isLoading } = useQuery({
    queryKey: ['FundingList'],
    queryFn: () => fetchFundingList(admin.adminNo),
  })

  const updateFunding = (funding: FundingType[]) => {
    let newFunding = []

    for (const item of funding) {
      newFunding.push({
        fundingNo: item.fundingNo,
        registrationNumber: item.registrationNumber,
        patientName: item.patientName,
        birth: item.birth,
        diseaseName: item.diseaseName,
        status: item.status,
        targetAmount: item.targetAmount,
        isRegReview: item.isRegReview,
        isRegUsage: item.isRegUsage,
        isRegDetail: item.isRegDetail,
      })
    }
    return newFunding
  }

  useEffect(() => {
    !isLoading && setFunding(updateFunding(data))
  }, [data, isLoading])

  const columns = useMemo(() => columnsData, [])
  const fundingMemo = useMemo(() => funding, [])

  return (
    <f.Container>
      <Table columns={columns} data={fundingMemo} />
    </f.Container>
  )
}

export default FundingListPage
