import Navbar from '@common/Navbar'
import HomeHeader from '@/components/home/HomeHeader'
import Layout from '@common/Layout'
import { handleAllowNotification } from '@/services/notificationPermission'
import { useEffect } from 'react'
import { userState } from '@stores/user'
import { useRecoilValue } from 'recoil'
import HomeTopSection from '@components/home/HomeTopSection'
import HomeContributors from '@components/home/HomeContributors'
import HomeTotalAmount from '@components/home/HomeTotalAmount'
import HomeReview from '@components/home/HomeReview'
import HomeSoonOver from '@components/home/HomeSoonOver'

const HomePage = () => {
  const userInfo = useRecoilValue(userState)

  useEffect(() => {
    handleAllowNotification(userInfo.memberNo)
  }, [])

  //
  return (
    <>
      <Layout>
        <HomeHeader />
        <HomeTopSection />
        <HomeContributors />
        <HomeTotalAmount />
        <HomeReview />
        <HomeSoonOver />
      </Layout>
      <Navbar current="home" />
    </>
  )
}

export default HomePage
