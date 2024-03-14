import { FundingType } from '@/types/fundingType'

export const percent = (data: FundingType): string => {
  return `${Math.round((data.total_amount / data.target_amount) * 100)}%`
}

export const dDay = (data: FundingType): string => {
  const today = new Date()
  const dday = new Date(data.end_date)
  const gap = dday.getTime() - today.getTime()

  return `D-${Math.ceil(gap / (1000 * 60 * 60 * 24))}`
}
