import FilterBox from '@components/funding/FilterBox'
import FundingListCard from '@/components/funding/FundingListCard'
import HomeHeader from '@/components/home/HomeHeader'
import { fundingState } from '@/stores/funding'
import Layout from '@common/Layout'
import Navbar from '@common/Navbar'
import { useRecoilState, useRecoilValue } from 'recoil'
import FundingListCount from '@/components/funding/FundingListCount'
import { useEffect, useState } from 'react'
import Modal from '@/common/Modal'
import FilterCondition from '@/components/funding/FilterBox/FilterCondition'
import ResponsiveModal from '@/common/ResponsiveModal'
import SortCondition from '@/components/funding/FilterBox/SortCondition'
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
import {
  ageRangeState,
  filterStatusState,
  filteredFundingState,
  sortState,
} from '@/stores/filterAndSort'
import { useQuery } from '@tanstack/react-query'
import { fetchFundingList } from '@/apis/funding'
import FundingListBox from '@/components/funding/FundingListCard/FundingListBox'

const FundingPage = () => {
  const [funding, setFunding] = useRecoilState(fundingState)
  const [filterOpen, setFilterOpen] = useState<boolean>(false) // 필터 모달
  const [sortOpen, setSortrOpen] = useState<boolean>(false) // 정렬 모달
  const sort = useRecoilValue(sortState)
  const filterStatus = useRecoilValue(filterStatusState)
  const ageRange = useRecoilValue(ageRangeState)

  const [filteredFunding, setFilteredFunding] =
    useRecoilState(filteredFundingState)

  const { data, isLoading } = useQuery({
    queryKey: ['FundingList'],
    queryFn: () => fetchFundingList(),
  })

  useEffect(() => {
    !isLoading && setFunding(data)
  }, [data, isLoading])

  useEffect(() => {
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
  }, [filterStatus, sort, funding])

  return (
    <>
      <Layout>
        <HomeHeader />
        <FundingListBox>
          <FilterBox
            setFilterOpen={setFilterOpen}
            setSortrOpen={setSortrOpen}
          />
          <FilterArea />
          <FundingListCount data={filteredFunding} />
          <div>
            {filteredFunding.map((item, idx) => (
              <FundingListCard key={idx} data={item} />
            ))}
          </div>
        </FundingListBox>
      </Layout>
      <Navbar current="funding" />

      {filterOpen && (
        <Modal
          name={'필터'}
          children={<FilterCondition setFilterOpen={setFilterOpen} />}
          onClose={() => setFilterOpen(false)}
        />
      )}

      {sortOpen && (
        <ResponsiveModal
          name={'정렬'}
          children={<SortCondition />}
          onClose={() => setSortrOpen(false)}
        />
      )}
    </>
  )
}

export default FundingPage
