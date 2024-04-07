import { PointItemType } from '@/types/mypageType'
import {
  filterDatesInRange,
  getOneMonthAgoDate,
  getTodayDate,
} from '@utils/dateMethods'
import { atom, selector } from 'recoil'

export const myPointState = atom<number>({
  key: 'myPointState',
  default: 0,
})

export const DefaultMyPointListFilter = {
  startDate: getOneMonthAgoDate(),
  endDate: getTodayDate(),
  type: '전체',
}

export const myPointListFilterState = atom({
  key: 'myPointListFilterState',
  default: DefaultMyPointListFilter,
})

export const myPointListState = atom<PointItemType[]>({
  key: 'myPointListState',
  default: [],
})

export const filteredMyPointListState = selector({
  key: 'filteredMyPointListState',
  get: ({ get }) => {
    const startDate = get(myPointListFilterState).startDate
    const endDate = get(myPointListFilterState).endDate
    const type = get(myPointListFilterState).type
    let list = get(myPointListState)

    list = filterDatesInRange(list, startDate, endDate)

    switch (type) {
      case '충전만':
        return list.filter(item => item.type === '충전')
      case '사용만':
        return list.filter(item => item.type === '사용')
      default:
        return list
    }
  },
})
