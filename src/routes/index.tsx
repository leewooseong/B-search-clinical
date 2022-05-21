import styles from './Routes.module.scss'
import { Routes, Route } from 'react-router-dom'

import Layout from './Layout/index'

const App = () => {
  return (
    <div className={styles.appWrapper}>
      <Routes>
        <Route path='/' element={<Layout />} />
      </Routes>
    </div>
  )
}

export default App
