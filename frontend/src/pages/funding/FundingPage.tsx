import FilterBtn from '@/components/funding/FilterBtn'
import FundingListCard from '@/components/funding/FundingListCard'
import { data } from '@/components/funding/FundingListCard/data'
import HomeHeader from '@/components/home/HomeHeader'
import Layout from '@common/Layout'
import Navbar from '@common/Navbar'

const FundingPage = () => {
  return (
    <>
      <Layout>
        <HomeHeader />
      </Layout>
      <FilterBtn />
      {data.map(item => (
        <FundingListCard key={item.title} data={item} />
      ))}
      <Navbar current="funding" />
    </>
  )
}

export default FundingPage
