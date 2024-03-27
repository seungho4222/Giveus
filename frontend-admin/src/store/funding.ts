import { FundingDetailType, FundingType } from '@/types/fundingType'
import { atom } from 'recoil'

export const fundingState = atom<FundingType[]>({
  key: 'fundingState',
  default: [],
})

export const selectedFundingNoState = atom<number>({
  key: 'selectedFundingNoState',
  default: 1,
})

export const fundingDetailState = atom<FundingDetailType>({
  key: 'fundingDetailState',
  default: {
    fundingNo: 0,
    issueNumber: '',
    registrationNumber: '',
    patientName: '',
    birth: '',
    diseaseName: '',
    diseaseCode: '',
    diagnosisDate: '',
    status: '',
    opinion: '',
    targetAmount: 0,
    endDate: '',
    title: '',
    phone: '',
    isRegReview: false,
    isRegUsage: false,
    isRegDetail: false,
    content: '',
    thumbnailUrl: '',
  },
})
