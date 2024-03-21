import { PointItemType } from '@/types/mypageType'
import { getOneMonthAgoDate, getTodayDate } from '@utils/dateMethods'
import { atom } from 'recoil'

export const myPointListFilterState = atom({
  key: 'myPointListFilterState',
  default: {
    startDate: getOneMonthAgoDate(),
    endDate: getTodayDate(),
    type: '전체',
  },
})

export const myPointListState = atom<PointItemType[]>({
  key: 'myPointListState',
  default: [],
})
