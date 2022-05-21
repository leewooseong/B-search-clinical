import { createFuzzyMatcher } from 'utils/fuzzyMatcher'
import styles from './RecommendKeywordItem.module.scss'

interface IRecommendKeywordItem {
  keyword: string
  sickNm: string
}

const RecommendKeywordItem = ({ keyword, sickNm }: IRecommendKeywordItem) => {
  const reg = createFuzzyMatcher(keyword)
  const matchAllReg = sickNm.matchAll(reg)
  const highlited = sickNm.split('')
  const strongIdxList: number[] = []

  for (const match of matchAllReg) {
    for (let i = 0, len = sickNm.length; i < len; i += 1) {
      if (match.slice(1).includes(highlited[i])) {
        strongIdxList.push(i)
      }
    }
  }

  return (
    <span>
      {highlited.map((item, index) => {
        const key = `${item}-${index}`
        if (strongIdxList.includes(index)) {
          return (
            <strong className={styles.mark} key={key}>
              {item}
            </strong>
          )
        }
        return item
      })}
    </span>
  )
}

export default RecommendKeywordItem
