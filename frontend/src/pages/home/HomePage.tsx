import Navbar from '@common/Navbar'
import HomeHeader from '@/components/home/HomeHeader'
import HomeTopSection from '@components/home/HomeTopSection'
import HomeContributors from '@components/home/HomeContributors'
import HomeTotalAmount from '@components/home/HomeTotalAmount'
import HomeReview from '@components/home/HomeReview'
import HomeSoonOver from '@components/home/HomeSoonOver'
import * as h from '@pages/home/HomePage.styled'

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <h.Wrap>
        <HomeTopSection />
        <HomeContributors />
        <HomeTotalAmount />
        <HomeReview />
        <HomeSoonOver />
      </h.Wrap>
      <Navbar current="home" />
    </>
  )
}

export default HomePage
