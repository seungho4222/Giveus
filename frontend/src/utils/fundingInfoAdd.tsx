import { FundingType } from '@/types/fundingType'

export const percent = (data: FundingType): string => {
  const result = Math.round((data.totalAmount / data.targetAmount) * 100)
  return `${result > 100 ? 100 : result}%`
}

export const dDay = (endDate: string): string => {
  const today = new Date()
  const dday = new Date(endDate)
  const gap = dday.getTime() - today.getTime()

  const result = Math.ceil(gap / (1000 * 60 * 60 * 24))

  return result > 0 ? `D-${result}` : '완료됨'
}
