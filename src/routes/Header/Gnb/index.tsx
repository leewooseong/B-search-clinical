import { useState, useRef } from 'react'
import styles from './GNB.module.scss'
import cx from 'classnames'
import { useClickAway } from 'react-use'

import { GnbIcon } from 'assets/svg'

const GNB = () => {
  const [isOpen, setIsOpen] = useState(false)
  const gnbRef = useRef<HTMLButtonElement>(null)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const handleCloseMenu = () => setIsOpen(false)

  useClickAway(gnbRef, handleCloseMenu)

  return (
    <>
      <button type='button' className={cx(styles.gnbMobileButton, styles.mobile)} onClick={toggle} ref={gnbRef}>
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
