import HomeFooter from '@/components/home/HomeFooter'
import HomeHeader from '@/components/home/HomeHeader'
import HomeNav from '@/components/home/HomeNav'
import * as h from '@pages/home/HomePage.styled'
import { Outlet } from 'react-router'
import FundingRegister from '../fundingregister/FundingRegister'

const HomePage = () => {
  return (
    <h.Container>
      <HomeNav />
      <h.Wrap>
        <HomeHeader />

        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <FundingRegister/>
        </div>
        
        
        
        <Outlet />
      </h.Wrap>
      <HomeFooter />
    </h.Container>
  )
}

export default HomePage
