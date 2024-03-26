import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './styles/globalStyle'
import HomeRouter from './router/HomeRouter'
import AuthRouter from './router/AuthRouter'

function App() {
  const user = false

  return (
    <BrowserRouter>
      <GlobalStyle />
      {!user ? <AuthRouter /> : <HomeRouter />}
    </BrowserRouter>
  )
}

export default App
