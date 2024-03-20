import FilterBox from '@components/funding/FilterBox'
import FundingListCard from '@/components/funding/FundingListCard'
import HomeHeader from '@/components/home/HomeHeader'
import { fundingState } from '@/stores/fundingState'
import Layout from '@common/Layout'
import Navbar from '@common/Navbar'
import { useRecoilValue } from 'recoil'
import FundingListCount from '@/components/funding/FundingListCount'
import { useEffect, useState } from 'react'
import Modal from '@/common/Modal'
import FilterCondition from '@/components/funding/FilterBox/FilterCondition'
import ResponsiveModal from '@/common/ResponsiveModal'
import SortCondition from '@/components/funding/FilterBox/SortCondition'
import { FundingType } from '@/types/fundingType'
import {
  sortByDonerCount,
  sortByHighestAmount,
  sortByLatest,
  sortByLowestAmount,
  sortByPeriod,
} from '@/utils/fundingSort'
import { sortCondition } from '@/assets/data/fundingCondition'
import FilterArea from '@/components/funding/FilterBox/FilterArea'
import { filterByAge, filterByDoing, filterByDone } from '@/utils/fundingFilter'

const FundingPage = () => {
  const funding: FundingType[] = useRecoilValue(fundingState)
  const [filterOpen, setFilterOpen] = useState<boolean>(false) // 필터 모달
  const [sortOpen, setSortrOpen] = useState<boolean>(false) // 정렬 모달
  const [sort, setSort] = useState<string>(sortCondition[0]) // 정렬 기준 : default 기간순
  const [filterStatus, setFilterStatus] = useState<boolean[]>([
    true,
    false,
    false,
  ]) // 진행중, 진행완료, 나이 체크 여부
  const [ageRange, setAgeRange] = useState<ReadonlyArray<number>>([0, 100]) // 나이 범위

  const [filteredFunding, setFilteredFunding] = useState<FundingType[]>([])

  const filter = () => {
    let filteredData = funding

    if (filterStatus[0] && !filterStatus[1]) {
      filteredData = filterByDoing(filteredData)
    } else if (!filterStatus[0] && filterStatus[1]) {
      filteredData = filterByDone(filteredData)
    }

    if (filterStatus[2]) {
      filteredData = filterByAge(filteredData, ageRange[0], ageRange[1])
    }

    return filteredData
  }

  useEffect(() => { // filter 후 sort 진행
    const filteredData = filter()

    switch (sort) {
      case sortCondition[0]:
        setFilteredFunding(sortByPeriod(filteredData))
        break
      case sortCondition[1]:
        setFilteredFunding(sortByDonerCount(filteredData))
        break
      case sortCondition[2]:
        setFilteredFunding(sortByLatest(filteredData))
        break
      case sortCondition[3]:
        setFilteredFunding(sortByHighestAmount(filteredData))
        break
      case sortCondition[4]:
        setFilteredFunding(sortByLowestAmount(filteredData))
        break
    }
  }, [filterStatus, sort])

  return (
    <>
      <Layout>
        <HomeHeader />
        <FilterBox
          setFilterOpen={setFilterOpen}
          sort={sort}
          setSortrOpen={setSortrOpen}
        />
        <FilterArea
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          ageRange={ageRange}
          setAgeRange={setAgeRange}
        />
        <FundingListCount data={filteredFunding} />
        <div>
          {filteredFunding.map((item, idx) => (
            <FundingListCard key={idx} data={item} />
          ))}
        </div>
      </Layout>
      <Navbar current="funding" />

      {filterOpen && (
        <Modal
          name={'필터'}
          children={
            <FilterCondition
              filterStatus={filterStatus}
              setFilterStatus={setFilterStatus}
              setFilterOpen={setFilterOpen}
              ageRange={ageRange}
              setAgeRange={setAgeRange}
            />
          }
          onClose={() => setFilterOpen(false)}
        />
      )}

      {sortOpen && (
        <ResponsiveModal
          name={'정렬'}
          children={<SortCondition value={sort} setValue={setSort} />}
          onClose={() => setSortrOpen(false)}
        />
      )}
    </>
  )
}

export default FundingPage
