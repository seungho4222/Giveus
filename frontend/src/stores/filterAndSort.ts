import { sortCondition } from '@/assets/data/fundingCondition'
import { FundingType } from '@/types/fundingType'
import { atom } from 'recoil'

export const sortState = atom<string>({
  key: 'sortState',
  default: sortCondition[0], // 정렬 기준 : default 기간순
})

export const filterStatusState = atom<boolean[]>({
  key: 'filterStatusState',
  default: [true, false, false], // 진행중, 진행완료, 나이 체크 여부
})

export const ageRangeState = atom<ReadonlyArray<number>>({
  key: 'ageRangeState',
  default: [0, 100], // 나이 범위
})

export const filteredFundingState = atom<FundingType[]>({
  key: 'filteredFundingState',
  default: [], // 필터링된 펀딩 목록
})
