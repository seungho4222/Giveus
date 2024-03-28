import SignupPage from '@pages/signup/SignupPage'
import FundingPage from '@pages/funding/FundingPage'
import LoginPage from '@pages/login/LoginPage'
import { Route, Routes } from 'react-router-dom'
import LoginRedirectHandler from '@pages/login/LoginRedirectHandler'
import SecondRegPage from '@/pages/secondReg/SecondRegPage'
import SearchPage from '@pages/search/SearchPage'
import HomePage from '@pages/home/HomePage'
import RegOkPage from '@/pages/secondReg/RegOkPage'
import AdminRedirectHandler from '@pages/admin/AdminRedirectHandler'

const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login/oauth2" element={<LoginRedirectHandler />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/funding" element={<FundingPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="*" element={<LoginPage />} />
      <Route path="/giveus/:id" element={<SecondRegPage />} />
      <Route path="/giveus/ok" element={<RegOkPage />} />
      <Route path="/admin/*" element={<AdminRedirectHandler />} />
    </Routes>
  )
}

export default HomeRouter
