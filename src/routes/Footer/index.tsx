import { Link } from 'react-router-dom'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerWrapper}>
        <ul>
          <li>(주)휴먼스케이프</li>
          <li>
            <address>서울특별시 강남구 봉은사로86길 6, 레베쌍트빌딩 601호 | 대표자: 장민후</address>
          </li>
          <li>
            <p>&copy; 2021 Humanscape, All rights reserved.</p>
          </li>
        </ul>
        <ul>
          <li>
            <Link to='#'>개인정보처리방침</Link>
          </li>
          <li>Living healthier by connecting better</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
