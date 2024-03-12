import Router from './router/router'
import { RecoilRoot } from 'recoil'
import { GlobalStyle } from './styles/globalStyle'


function App() {

  return (
    <RecoilRoot>
      <Router />
      <GlobalStyle />
    </RecoilRoot>
  )
}

export default App
