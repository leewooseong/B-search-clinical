import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerWrapper}>
        <dl>
          <dt>(주)휴먼스케이프</dt>
          <dd>서울특별시 강남구 봉은사로86길 6, 레베쌍트빌딩 601호 | 대표자: 장민후</dd>
          <dd>© 2021 Humanscape, All rights reserved.</dd>
        </dl>
        <dl>
          <dt>개인정보처리방침</dt>
          <dd>Living healthier by connecting better</dd>
        </dl>
      </div>
    </footer>
  )
}

export default Footer
