import styles from './SectionSubscribe.module.scss'
import cx from 'classnames'

import { DecorationMobileIcon, DecorationPcIcon } from 'assets/svg'

const SectionSubscribe = () => {
  return (
    <section>
      <div className={styles.decorationWrapper}>
        <h2>
          새로운 임상시험이 등록되면 <br className={styles.mobile} />
          <em>문자로 알려드려요.</em>
        </h2>
        <button type='button'>임상시험 소식받기</button>
        <DecorationMobileIcon className={cx(styles.forMobileScreen, styles.decorationSVG)} />
        <DecorationPcIcon className={cx(styles.forPcScreen, styles.decorationSVG)} />
      </div>
    </section>
  )
}

export default SectionSubscribe
