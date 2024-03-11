import SearchPage from '@pages/search/SearchPage'
import HomePage from '@pages/home/HomePage'
import { Route, Routes } from 'react-router-dom'
import AlarmPage from '@pages/alarm/AlarmPage'
import FundingPage from '@pages/funding/FundingPage'
import MyPage from '@pages/mypage/MyPage'

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/funding" element={<FundingPage />} />
      <Route path="/alarm" element={<AlarmPage />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  )
}

export default AuthRouter
