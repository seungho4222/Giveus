export type FundingType = {
  fundingNo: number
  registrationNumber: string
  patientName: string
  birth: string
  diseaseName: string
  status: string
  targetAmount: number
  // is_reg_review: boolean // 후기 등록 여부
  // is_reg_usage: boolean // 사용내역 등록 여부
  // is_reg_detail: boolean // 2차 등록 여부
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
  is_reg_review: boolean
  is_reg_usage: boolean
  is_reg_detail: boolean
  content: string
  thumbnail_url: string
}
