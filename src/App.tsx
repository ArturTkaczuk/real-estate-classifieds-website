import { Header } from './components/Header/Header'
import { Menu } from './components/Menu/Menu'
import './App.css'
import { SearchFilter } from './components/SearchFilter/SearchFilter'

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <SearchFilter />
      {/* <Estates /> */}
    </div>
  )
}

export default App
