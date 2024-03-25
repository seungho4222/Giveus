import HomePage from '@/pages/home/HomePage'
import { Route, Routes } from 'react-router-dom'

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/admin" element={<HomePage />} />

      <Route path="/admin/*" element={<HomePage />} />
    </Routes>
  )
}

export default AuthRouter
