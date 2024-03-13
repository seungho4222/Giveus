import SignupPage from '@pages/signup/SignupPage'
import FundingPage from '@pages/funding/FundingPage'
import LoginPage from '@pages/login/LoginPage'
import { Route, Routes } from 'react-router-dom'
import KakaoRedirectHandler from '@pages/login/KakaoRedirectHandler'

const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/login/oauth" element={<KakaoRedirectHandler />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/funding" element={<FundingPage />} />
      <Route path="*" element={<LoginPage />} />
    </Routes>
  )
}

export default HomeRouter
