import FilterBtn from '@/components/funding/FilterBtn'
import FundingListCard from '@/components/funding/FundingListCard'
import HomeHeader from '@/components/home/HomeHeader'
import { fundingState } from '@/recoil/fundingState'
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
      <FilterBtn />
      {funding.map(item => (
        <FundingListCard key={item.id} data={item} />
      ))}
      <Navbar current="funding" />
    </>
  )
}

export default FundingPage
