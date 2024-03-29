import { Dispatch, SetStateAction } from 'react'

type FundingCommonType = {
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
}

export type FundingType = {
  content: string
} & FundingCommonType

export type DonerType = {
  memberFundingNo: number
  name: string
  createdAt: string
  amount: number
  isPublic: number
  imageUrl: string
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

export type RecentParticipantType = {
  memberFundingNo: number
  name: string
  amount: number
  createdAt: string
  isPublic: boolean
  imageUrl: string
}

export type UserDonationsType = {
  memberFundingNo: number
  amount: number
} & FundingCommonType
