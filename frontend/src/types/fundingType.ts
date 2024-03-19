import { Dispatch, SetStateAction } from "react"

export type FundingType = {
  fundingNo: number
  issueNumber: string
  registrationNumber: string
  patientName: string
  status: string
  birth: string
  gender: string
  diseaseName: string
  diseaseCode: string
  dignosisDate: string
  opinion: string
  title: string
  startDate: string
  endDate: string
  totalAmount: number
  targetAmount: number
  createdAt: string
  phone: string
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
  sort: string
  setSortrOpen: Dispatch<SetStateAction<boolean>>
}

export type FilterStatusType = {
  filterStatus: boolean[]
  setFilterStatus: Dispatch<SetStateAction<boolean[]>>
}