import { atom } from 'recoil'
import { DonerType, FundingType, MedicalExpenseType } from '@/types/fundingType'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'prevUrl',
  storage: localStorage,
})

// 전체 펀딩 목록
export const fundingState = atom<FundingType[]>({
  key: 'fundingState',
  default: [],
})

// 펀딩 상세 정보
export const fundingDetailState = atom<FundingType>({
  key: 'fundingDetailState',
  default: {
    fundingNo: 0,
    thumbnailUrl: '',
    title: '',
    birth: '',
    status: '',
    startDate: '',
    endDate: '',
    totalAmount: 0,
    targetAmount: 0,
    createdAt: '',
    content: '',
  },
  effects_UNSTABLE: [persistAtom],
})

// 펀딩 상세 기부자 명단
export const donerListState = atom<DonerType[]>({
  key: 'donerListState',
  default: [],
})

// 펀딩 상세 기금 사용 내역
export const medicalExpenseState = atom<MedicalExpenseType[]>({
  key: 'medicalExpenseState',
  default: [],
})

// 이전 url 주소
export const prevUrlState = atom<string>({
  key: 'prevUrlState',
  default: '',
  effects_UNSTABLE: [persistAtom],
})
