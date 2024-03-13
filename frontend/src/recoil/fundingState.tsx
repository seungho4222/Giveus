import { atom } from 'recoil'
import { data } from '@/components/funding/FundingListCard/data'
import { FundingType } from '@/types/fundingType'
import { DonerType } from '@/types/donerType'

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
