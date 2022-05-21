import Gnb from './Gnb'
import styles from './Header.module.scss'

import { LogoIcon } from '../../assets/svg'

const Header = () => {
  return (
    <header>
      <div className={styles.headerWrapper}>
        <LogoIcon className={styles.logoIcon} />
        <Gnb />
      </div>
    </header>
  )
}

export default Header
