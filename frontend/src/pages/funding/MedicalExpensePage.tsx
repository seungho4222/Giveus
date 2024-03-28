import { fetchFundingUsage } from '@/apis/funding'
import MedicalExpense from '@/components/funding/FundingDetail/MedicalExpense'
import { medicalExpenseState } from '@/stores/funding'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'

const MedicalExpensePage = () => {
  const { id } = useParams()
  const setMedicalExpense = useSetRecoilState(medicalExpenseState)

  const { data, isLoading } = useQuery({
    queryKey: ['FundingUsage'],
    queryFn: () => fetchFundingUsage(Number(id)),
  })

  useEffect(() => {
    !isLoading && setMedicalExpense(data)
  }, [data, isLoading])

  return (
    <>
      <MedicalExpense />
    </>
  )
}

export default MedicalExpensePage
