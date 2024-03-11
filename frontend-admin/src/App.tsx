import { useState } from 'react'
import Test from '@/pages/Test'
import Router from './router/router'
import { RecoilRoot } from 'recoil'
import {GlobalStyle} from './styles/globalStyle'
function App() {
  const [count, setCount] = useState(0)

  return (
    <RecoilRoot>
      <Router />
      <GlobalStyle />
    </RecoilRoot>
  )
}

export default App
