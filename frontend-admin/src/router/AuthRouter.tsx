import HomePage from '@/pages/home/HomePage'
import FundingDetailPage from '@/pages/home/fundingDetail/FundingDetailPage'
import FundingListPage from '@/pages/home/fundingList/FundingListPage'
import FundingRegPage from '@/pages/home/fundingReg/FundingRegPage'
import MyPage from '@/pages/home/myPage/MyPage'
import { Route, Routes } from 'react-router-dom'
import BlockchainTest from '@/pages/BlockchainTest'

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route path="fundingReg" element={<FundingRegPage />} />
        <Route path="funding" element={<FundingListPage />} />
        <Route path="funding/:id" element={<FundingDetailPage />} />
        <Route path="myPage" element={<MyPage />} />
        <Route path="/admin/blockchain-test" element={<BlockchainTest />} />
      </Route>
      <Route path="/*" element={<HomePage />} />
    </Routes>
  )
}

export default AuthRouter
