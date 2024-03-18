import FilterBox from '@components/funding/FilterBox'
import FundingListCard from '@/components/funding/FundingListCard'
import HomeHeader from '@/components/home/HomeHeader'
import { fundingState } from '@/stores/fundingState'
import Layout from '@common/Layout'
import Navbar from '@common/Navbar'
import { useRecoilValue } from 'recoil'

const FundingPage = () => {
  const funding = useRecoilValue(fundingState)

  return (
    <>
      <Layout>
        <HomeHeader />
      </Layout>
      <FilterBox />
      {funding.map(item => (
        <FundingListCard key={item.fundingNo} data={item} />
      ))}
      <Navbar current="funding" />
    </>
  )
}

export default FundingPage
