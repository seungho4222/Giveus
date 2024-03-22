import { sortCondition } from '@/assets/data/fundingCondition'
import { atom, selector } from 'recoil'
import { fundingState } from './funding'
import { filterByAge, filterByDoing, filterByDone } from '@/utils/fundingFilter'
import {
  sortByDonerCount,
  sortByHighestAmount,
  sortByLatest,
  sortByLowestAmount,
  sortByPeriod,
} from '@/utils/fundingSort'

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

// 필터링된 펀딩 목록
export const filteredFundingState = selector({
  key: 'sortedFundingState',
  get: ({ get }) => {
    let filteredData = get(fundingState)
    const filterStatus = get(filterStatusState)
    const ageRange = get(ageRangeState)
    const sort = get(sortState)

    if (filterStatus[0] && !filterStatus[1]) {
      filteredData = filterByDoing(filteredData)
    } else if (!filterStatus[0] && filterStatus[1]) {
      filteredData = filterByDone(filteredData)
    }

    if (filterStatus[2]) {
      filteredData = filterByAge(filteredData, ageRange[0], ageRange[1])
    }

    switch (sort) {
      case sortCondition[0]:
        return sortByPeriod(filteredData)
      case sortCondition[1]:
        return sortByDonerCount(filteredData)
      case sortCondition[2]:
        return sortByLatest(filteredData)
      case sortCondition[3]:
        return sortByHighestAmount(filteredData)
      case sortCondition[4]:
        return sortByLowestAmount(filteredData)
      default:
        return filteredData
    }
  },
})
