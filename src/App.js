import './App.css'
import DataList from './components/DataList'
import { GlobalStyle } from './components/styled'
import AOS from 'aos'
import 'aos/dist/aos.css'
AOS.init()
function App() {
  return (
    <div className='App' data-aos='fade-up'>
      {AOS.init()}
      <GlobalStyle />
      <h1>Rahaf's timeline</h1>
      <DataList />
    </div>
  )
}

export default App
