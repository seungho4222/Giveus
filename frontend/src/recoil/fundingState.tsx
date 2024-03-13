import { atom } from 'recoil'
import { data } from '@/components/funding/FundingListCard/data'
import { FundingType } from '@/types/fundingType'
import { DonerType } from '@/types/donerType'
import { MedicalExpenseType } from '@/types/medicalExpenseType'

export const fundingState = atom<FundingType[]>({
  key: 'fundingState',
  default: data,
})

export const fundingDetailState = atom<FundingType>({
  key: 'fundingDetailState',
  default: {
    id: '',
    title: '',
    start_date: '',
    end_date: '',
    status: '',
    total_amount: 0,
    target_amount: 0,
  },
})

export const donerListState = atom<DonerType[]>({
  key: 'donerListState',
  default: [
    {
      id: '1',
      nickname: '승재홍',
      amount: 300000,
      create_at: '2024-03-23',
    },
    {
      id: '2',
      nickname: '김내림',
      amount: 100000,
      create_at: '2024-03-23',
    },
  ],
})

export const medicalExpenseState = atom<MedicalExpenseType[]>({
  key: 'medicalExpenseState',
  default: [
    {
      id: '1',
      category: '검사료',
      content: '임상병리검사종합검증료',
      amount: 20000,
      count: 1,
    },
    {
      id: '2',
      category: '포괄수가료',
      content: '포괄수가 진료비',
      amount: 100000,
      count: 1,
    },
  ],
})
