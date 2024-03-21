import { DonatedFundingType } from '@/types/mypageType'
import {
  donatefilterDatesInRange,
  getOneMonthAgoDate,
  getTodayDate,
} from '@utils/dateMethods'
import { atom, selector } from 'recoil'

export const DefaultMyDonateListFilter = {
  startDate: getOneMonthAgoDate(),
  endDate: getTodayDate(),
  status: '전체',
}

export const myDonateListFilterState = atom({
  key: 'myDonateListFilterState',
  default: DefaultMyDonateListFilter,
})

export const myDonateListState = atom<DonatedFundingType[]>({
  key: 'myDonateListState',
  default: [],
})

export const filteredMyDonateListState = selector({
  key: 'filteredMyDonateListState',
  get: ({ get }) => {
    const startDate = get(myDonateListFilterState).startDate
    const endDate = get(myDonateListFilterState).endDate
    const status = get(myDonateListFilterState).status
    let list = get(myDonateListState)

    list = donatefilterDatesInRange(list, startDate, endDate)

    switch (status) {
      case '진행중':
        return list.filter(item => item.status === '진행중')
      case '진행완료':
        return list.filter(item => item.status === '진행완료')
      default:
        return list
    }
  },
})
