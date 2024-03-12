import FilterBtn from '@/components/funding/filterBtn'
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
      
      <Navbar current="funding" />
    </>
  )
}

export default FundingPage
