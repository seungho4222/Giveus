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
  endData: string
  title: string
  phone: string
  isRegReview: boolean
  isRegUsage: boolean
  isRegDetail: boolean
  content: string
  thumbnail_url: string
}
