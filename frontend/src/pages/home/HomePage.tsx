import Navbar from '@common/Navbar'
import HomeHeader from '@/components/home/HomeHeader'
import Layout from '@common/Layout'
import { handleAllowNotification } from '@/services/notificationPermission'
import { useEffect } from 'react'

const HomePage = () => {
  useEffect(() => {
    handleAllowNotification()
  }, [])

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
