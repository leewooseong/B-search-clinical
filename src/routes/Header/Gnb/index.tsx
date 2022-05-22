import cx from 'classnames'
import styles from './GNB.module.scss'
import { GnbIcon } from '../../../assets/svg'
import { useState, useEffect, useRef } from 'react'

const GNB = () => {
  const [isOpen, setIsOpen] = useState(false)
  const gnbRef = useRef<any>(null)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent): void {
      if (gnbRef.current && !gnbRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [gnbRef])

  return (
    <>
      <button type='button' className={cx(styles.gnbMobileButton, styles.mobile)} onClick={toggle}>
        <GnbIcon ref={gnbRef} />
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
