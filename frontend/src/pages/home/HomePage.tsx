import Navbar from '@common/Navbar'
import HomeHeader from '@/components/home/HomeHeader'

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <Navbar current="home" />
    </>
  )
}

export default HomePage
