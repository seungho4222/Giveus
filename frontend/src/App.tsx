import { ThemeProvider } from 'styled-components'
import './App.css'
import HomePage from '@pages/HomePage'
import { darkTheme, lightTheme } from './styles/theme'

const App = () => {
  return (
    <>
      <div>
        <ThemeProvider theme={'light' ? lightTheme : darkTheme}>
          <HomePage />
        </ThemeProvider>
      </div>
    </>
  )
}

export default App
