import styles from './Routes.module.scss'
import { Routes, Route } from 'react-router-dom'

import Main from './Main/index'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>
    </div>
  )
}

export default App
