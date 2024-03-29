import { FundingType } from '@/types/fundingType'

export const percent = (data: FundingType): string => {
  return `${Math.round((data.totalAmount / data.targetAmount) * 100)}%`
}

export const dDay = (endDate: string): string => {
  const today = new Date()
  const dday = new Date(endDate)
  const gap = dday.getTime() - today.getTime()

  const result = Math.ceil(gap / (1000 * 60 * 60 * 24))

  return result ? `D-${result}` : '완료됨'
}
