import SearchPage from '@pages/search/SearchPage'
import HomePage from '@pages/home/HomePage'
import { Route, Routes } from 'react-router-dom'
import AlarmPage from '@pages/alarm/AlarmPage'
import FundingPage from '@pages/funding/FundingPage'
import MyPage from '@pages/mypage/MyPage'
import FundingDetailPage from '@/pages/funding/FundingDetailPage'

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/funding" element={<FundingPage />} />
      <Route path="/alarm" element={<AlarmPage />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/funding/:id" element={<FundingDetailPage />} />
    </Routes>
  )
}

export default AuthRouter
