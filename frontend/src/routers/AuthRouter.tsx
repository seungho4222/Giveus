import HomePage from '@pages/home/HomePage'
import { Route, Routes } from 'react-router-dom'

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default AuthRouter
