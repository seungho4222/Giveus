import FilterBox from '@components/funding/FilterBox'
import FundingListCard from '@/components/funding/FundingListCard'
import HomeHeader from '@/components/home/HomeHeader'
import { fundingState } from '@/stores/funding'
import Layout from '@common/Layout'
import Navbar from '@common/Navbar'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import FundingListCount from '@/components/funding/FundingListCount'
import { useEffect, useState } from 'react'
import Modal from '@/common/Modal'
import FilterCondition from '@/components/funding/FilterBox/FilterCondition'
import ResponsiveModal from '@/common/ResponsiveModal'
import SortCondition from '@/components/funding/FilterBox/SortCondition'
import FilterArea from '@/components/funding/FilterBox/FilterArea'
import { filteredFundingState } from '@/stores/filterAndSort'
import { useQuery } from '@tanstack/react-query'
import { fetchFundingList } from '@/apis/funding'
import FundingListBox from '@/components/funding/FundingListCard/FundingListBox'
import * as f from '@pages/funding/FundingPage.styled'

const FundingPage = () => {
  const setFunding = useSetRecoilState(fundingState)
  const [filterOpen, setFilterOpen] = useState<boolean>(false) // 필터 모달
  const [sortOpen, setSortrOpen] = useState<boolean>(false) // 정렬 모달
  const filteredFunding = useRecoilValue(filteredFundingState)

  const { data, isLoading } = useQuery({
    queryKey: ['FundingList'],
    queryFn: () => fetchFundingList(),
  })

  useEffect(() => {
    !isLoading && setFunding(data)
  }, [data, isLoading])

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
          <f.Wrap>
            {filteredFunding.map((item, idx) => (
              <FundingListCard key={idx} data={item} />
            ))}
          </f.Wrap>
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
