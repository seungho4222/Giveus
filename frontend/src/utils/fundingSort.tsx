import { FundingType } from "@/types/fundingType"

export const sortByPeriod = (data: FundingType[]): FundingType[] => {
  return data.slice().sort((a, b) => new Date(a.endDate).getTime() - new Date(b.endDate).getTime());
}

export const sortByDonerCount = (data: FundingType[]): FundingType[] => {
  return data // 모금자 수 연결하기
}

export const sortByLatest = (data: FundingType[]): FundingType[] => {
  return data.slice().sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
}

export const sortByHighestAmount = (data: FundingType[]): FundingType[] => {
  return data.slice().sort((a, b) => b.totalAmount - a.totalAmount);
}

export const sortByLowestAmount = (data: FundingType[]): FundingType[] => {
  return data.slice().sort((a, b) => a.totalAmount - b.totalAmount);
}
