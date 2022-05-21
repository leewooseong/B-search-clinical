import styles from './SectionDecoration.module.scss'
import { DecorationMobileIcon, DecorationPcIcon } from '../../../assets/svg'
import cx from 'classnames'

const SectionDecoration = () => {
  return (
    <section>
      <div className={styles.decorationWrapper}>
        <h1>
          새로운 임상시험이 등록되면 <br className={styles.mobile} />
          <mark>문자로 알려드려요.</mark>
        </h1>
        <button type='button'>임상시험 소식받기</button>
        <DecorationMobileIcon className={cx(styles.mobile, styles.decorationSVG)} />
        <DecorationPcIcon className={cx(styles.pc, styles.decorationSVG)} />
      </div>
    </section>
  )
}

export default SectionDecoration
