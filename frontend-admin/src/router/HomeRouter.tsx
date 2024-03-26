import LoginPage from '@pages/login/LoginPage'
import { Route, Routes } from 'react-router-dom'

const HomeRouter = () => {
  return (
    <Routes>
      <Route path="/admin/login" element={<LoginPage />} />
      <Route path="/admin/*" element={<LoginPage />} />
    </Routes>
  )
}

export default HomeRouter
