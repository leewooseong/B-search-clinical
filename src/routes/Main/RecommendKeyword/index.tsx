import styles from './RecommendKeyword.module.scss'
import { MouseEvent } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'states'

import useKeywordQuery from 'hooks/useKeywordQuery'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { setKeyword } from 'states/search'

import { SearchIcon } from 'assets/svg'

interface IProps {
  test: React.Dispatch<React.SetStateAction<string>>
}

const RecommendKeyword = ({ test }: IProps) => {
  const dispatch = useAppDispatch()
  const keyword = useSelector((state: RootState) => state.search.keyword)
  const { data, isLoading } = useKeywordQuery(keyword)

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    test(e.currentTarget.value)
    dispatch(setKeyword(e.currentTarget.value))
  }

  //   if (isLoading) return <ul><li>검색 중...</li></ul>
  //   if (!data || !keyword) return null

  return (
    <div className={styles.listContainer}>
      <h2>추천 검색어</h2>
      <ul>
        {data?.map((item) => (
          <li key={item.sickCd}>
            <SearchIcon />
            <button type='button' value={item.sickNm} onClick={clickHandler}>
              {item.sickNm}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default RecommendKeyword
