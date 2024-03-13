import SearchPage from '@pages/search/SearchPage'
import HomePage from '@pages/home/HomePage'
import { Route, Routes } from 'react-router-dom'
import AlarmPage from '@pages/alarm/AlarmPage'
import FundingPage from '@pages/funding/FundingPage'
import MyPage from '@pages/mypage/MyPage'
import FundingDetailPage from '@/pages/funding/FundingDetailPage'
import DetailMainPage from '@/pages/funding/DetailMainPage'
import DonorListPage from '@/pages/funding/DonorListPage'
import MedicalExpensePage from '@/pages/funding/MedicalExpensePage'

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/funding" element={<FundingPage />} />
      <Route path="/alarm" element={<AlarmPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/funding/:id" element={<FundingDetailPage />}>
        <Route path="detail-main" element={<DetailMainPage />} />
        <Route path="donor-list" element={<DonorListPage />} />
        <Route path="medical-expense" element={<MedicalExpensePage />} />
      </Route>
    </Routes>
  )
}

export default AuthRouter
