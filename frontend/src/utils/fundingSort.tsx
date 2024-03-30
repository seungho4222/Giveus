import { FundingType } from "@/types/fundingType"

export const sortByPeriod = (data: FundingType[]): FundingType[] => {
  return data.slice().sort((a, b) => new Date(a.endDate).getTime() - new Date(b.endDate).getTime())
}

export const sortByDonerCount = (data: FundingType[]): FundingType[] => {
  return data.slice().sort((a, b) => b.donationCnt - a.donationCnt)
}

export const sortByLatest = (data: FundingType[]): FundingType[] => {
  return data.slice().sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
}

export const sortByHighestAmount = (data: FundingType[]): FundingType[] => {
  return data.slice().sort((a, b) => b.totalAmount - a.totalAmount)
}

export const sortByLowestAmount = (data: FundingType[]): FundingType[] => {
  return data.slice().sort((a, b) => a.totalAmount - b.totalAmount)
}
