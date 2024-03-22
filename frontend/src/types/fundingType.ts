import { Dispatch, SetStateAction } from 'react'

export type FundingType = {
  fundingNo: number
  thumbnailUrl: string
  title: string
  birth: string
  status: string
  startDate: string
  endDate: string
  totalAmount: number
  targetAmount: number
  createdAt: string
  content: string
}

export type DonerType = {
  memberFundingNo: number
  createdAt: string
  amount: number
  isPublic: number
  nickname: string
}

export type MedicalExpenseType = {
  usageHistoryNo: number
  category: string
  content: string
  amount: number
  count: number
}

export type FilterBoxType = {
  setFilterOpen: Dispatch<SetStateAction<boolean>>
  setSortrOpen: Dispatch<SetStateAction<boolean>>
}
