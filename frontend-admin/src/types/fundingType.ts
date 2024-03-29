import { Dispatch, SetStateAction } from 'react'

export type FundingType = {
  fundingNo: number
  registrationNumber: string
  patientName: string
  birth: string
  diseaseName: string
  status: string
  targetAmount: number
  isRegReview: boolean // 후기 등록 여부
  isRegUsage: boolean // 사용내역 등록 여부
  isRegDetail: boolean // 2차 등록 여부
}

export type FundingDetailType = {
  fundingNo: number
  issueNumber: string
  registrationNumber: string
  patientName: string
  birth: string
  diseaseName: string
  diseaseCode: string
  diagnosisDate: string
  status: string
  opinion: string
  targetAmount: number
  endDate: string
  title: string
  phone: string
  isRegReview: boolean
  isRegUsage: boolean
  isRegDetail: boolean
  content: string
  thumbnailUrl: string
}

export type RegDataType = {
  [key: string]: string | number | boolean
  phone: string
  targetAmount: number
  startDate: string
  endDate: string
  issueNumber: string
  registrationNumber: string
  patientName: string
  birth: string
  gender: string
  diseaseName: string
  diseaseCode: string
  diagnosisDate: string
  opinion: string
  title: string
}

export type RegInputType = {
  id: string
  label: string
  placeholder: string
  value: string
  setValue: Dispatch<SetStateAction<RegDataType>>
}

export type RegInputTypeString = {
  id: string
  label: string
  placeholder: string
  value: string
  setValue: Dispatch<SetStateAction<string>>
}

export type RegDataMutateType = {
  adminNo: number
  title: string
} & RegDataType

export type RegFileType = {
  onOCRResult: (result: any) => void
}

export type OCRResult = {
  name: keyof RegDataType
  inferText: string
}

export type UsageDataType = {
  fundingNo: number
  category: string
  content: string
  amount: number
  count: number
}

export type UsageInputType = {
  id: string
  label: string
  placeholder: string
  value: string | number
  setValue: Dispatch<SetStateAction<UsageDataType>>
}

export type BlocStoreType = {
  goalAmount: number
  startTime: string
  endTime: string
  title: string
  hospitalName: string
}
