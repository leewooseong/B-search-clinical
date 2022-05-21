import styles from './Routes.module.scss'
import { Routes, Route } from 'react-router-dom'

import Header from './Header/index'
import Main from './Main/index'
import Footer from './Footer/index'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
