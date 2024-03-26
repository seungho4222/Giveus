import { FundingType } from '@/types/fundingType'
import { atom } from 'recoil'

export const fundingState = atom<FundingType[]>({
  key: 'fundingState',
  default: [],
})

export const selectedFundingNoState = atom<number>({
  key: 'selectedFundingNoState',
  default: 1,
})
