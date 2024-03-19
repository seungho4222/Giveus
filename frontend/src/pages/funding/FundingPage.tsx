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

const FundingPage = () => {
  const funding: FundingType[] = useRecoilValue(fundingState)
  const [filterOpen, setFilterOpen] = useState<boolean>(false)
  const [sortOpen, setSortrOpen] = useState<boolean>(false)
  const [sort, setSort] = useState<string>(sortCondition[0])
  const [sortedFunding, setSortedFunding] = useState<FundingType[]>(sortByPeriod(funding))

  useEffect(() => {
    switch (sort) {
      case sortCondition[0]:
        setSortedFunding(sortByPeriod(funding))
        break
      case sortCondition[1]:
        setSortedFunding(sortByDonerCount(funding))
        break
      case sortCondition[2]:
        setSortedFunding(sortByLatest(funding))
        break
      case sortCondition[3]:
        setSortedFunding(sortByHighestAmount(funding))
        break
        case sortCondition[4]:
        setSortedFunding(sortByLowestAmount(funding))
        break
    }
  }, [sort])

  return (
    <>
      <Layout>
        <HomeHeader />
        <FilterBox
          setFilterOpen={setFilterOpen}
          sort={sort}
          setSortrOpen={setSortrOpen}
        />
        <FundingListCount data={funding} />
        <div>
          {sortedFunding &&
            sortedFunding.map(item => (
              <FundingListCard key={item.fundingNo} data={item} />
            ))}
        </div>
      </Layout>
      <Navbar current="funding" />

      {filterOpen && (
        <Modal
          name={'필터'}
          children={<FilterCondition />}
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
