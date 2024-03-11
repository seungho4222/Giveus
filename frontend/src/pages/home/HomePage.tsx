import Navbar from '@common/Navbar'
import HomeHeader from '@/components/home/HomeHeader'
import Layout from '@common/Layout'

const HomePage = () => {
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
