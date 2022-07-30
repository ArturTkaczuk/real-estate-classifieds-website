import { Header } from './components/Header/Header'
import { HeadingPaper } from './components/HeadingPaper/HeadingPaper'
import styles from './App.module.css'
import { SearchFilter } from './components/SearchFilter/SearchFilter'

function App() {
  return (
    <div>
      <div className={styles.bgImage} />
      <Header />
      <HeadingPaper />
      <SearchFilter />
      <div style={{ height: '100vh' }} />
      {/* <Estates /> */}
    </div>
  )
}

export default App
