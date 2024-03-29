import HomePage from '@/pages/home/HomePage'
import FundingDetailPage from '@/pages/home/fundingDetail/FundingDetailPage'
import FundingListPage from '@/pages/home/fundingList/FundingListPage'
import FundingRegPage from '@/pages/home/fundingReg/FundingRegPage'
import MyPage from '@/pages/home/myPage/MyPage'
import { Route, Routes } from 'react-router-dom'
import BlockchainTest from '@/pages/BlockchainTest'
import LoginPage from '@pages/login/LoginPage'
import FundingRegister from '@/pages/fundingregister/FundingRegister'
import SignupPage from '@pages/signup/SignupPage'

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="fundingReg" element={<FundingRegPage />} />
        <Route path="funding" element={<FundingListPage />} />
        <Route path="funding/:id" element={<FundingDetailPage />} />
        <Route path="myPage" element={<MyPage />} />
        <Route path="blockchain-test" element={<BlockchainTest />} />
        <Route path="funding-register" element={<FundingRegister />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/*" element={<HomePage />} />
    </Routes>
  )
}

export default AuthRouter
