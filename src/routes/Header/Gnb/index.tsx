import cx from 'classnames'
import styles from './GNB.module.scss'
import { GnbIcon } from '../../../assets/svg'
import { useState } from 'react'

const GNB = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <button type='button' className={cx(styles.gnbMobileButton, styles.mobile)} onClick={toggle}>
        <GnbIcon />
      </button>
      <nav className={cx({ [styles.open]: isOpen })}>
        <ul>
          <li>
            <button type='button'>소식받기</button>
          </li>
          <li>
            <button type='button'>제휴/문의</button>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default GNB
