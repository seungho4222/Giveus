import SignupPage from '@pages/signup/SignupPage'
import FundingPage from '@pages/funding/FundingPage'
import LoginPage from '@pages/login/LoginPage'
import { Route, Routes } from 'react-router-dom'

const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/funding" element={<FundingPage />} />
      <Route path="*" element={<LoginPage />} />
    </Routes>
  )
}

export default HomeRouter
