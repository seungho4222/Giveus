import HomePage from '@/pages/home/HomePage'
import FundingDetailPage from '@/pages/home/fundingDetail/FundingDetailPage'
import FundingListPage from '@/pages/home/fundingList/FundingListPage'
import FundingRegPage from '@/pages/home/fundingReg/FundingRegPage'
import MyPage from '@/pages/home/myPage/MyPage'
import { Route, Routes } from 'react-router-dom'
import BlockchainTest from '@/pages/BlockchainTest'
import ReviewRegPage from '@/pages/reviewReg/ReviewRegPage'
import ReviewRegOkPage from '@/pages/reviewReg/ReviewRegOkPage'

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/admin" element={<HomePage />}>
        <Route path="fundingReg" element={<FundingRegPage />} />
        <Route path="funding" element={<FundingListPage />} />
        <Route path="funding/:id" element={<FundingDetailPage />} />
        <Route path="myPage" element={<MyPage />} />
        <Route path="/admin/blockchain-test" element={<BlockchainTest />} />
      </Route>
      <Route path="/admin/*" element={<HomePage />} />
      <Route path="/giveus/review/:id" element={<ReviewRegPage />} />
      <Route path="/giveus/review-ok" element={<ReviewRegOkPage />} />
    </Routes>
  )
}

export default AuthRouter
