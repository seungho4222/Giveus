import Navbar from '@common/Navbar'
import HomeHeader from '@/components/home/HomeHeader'
import Layout from '@common/Layout'
import { handleAllowNotification } from '@/services/notificationPermission'
import { useEffect } from 'react'
import { userState } from '@stores/user'
import { useRecoilValue } from 'recoil'

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
      </Layout>
      <Navbar current="home" />
    </>
  )
}

export default HomePage
