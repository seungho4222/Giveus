import HomeFooter from '@/components/home/HomeFooter'
import HomeHeader from '@/components/home/HomeHeader'
import HomeNav from '@/components/home/HomeNav'
import * as h from '@pages/home/HomePage.styled'
import { Outlet } from 'react-router'


const HomePage = () => {
  return (
    <h.Container>
      <HomeNav />
      <h.Wrap>
        <HomeHeader />
        <Outlet />
      </h.Wrap>
      <HomeFooter />
    </h.Container>
  )
}

export default HomePage
