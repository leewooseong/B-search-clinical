import styles from './RecommendKeyword.module.scss'
import { Dispatch, MouseEvent, SetStateAction, useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'states'
import cx from 'classnames'

import useKeywordQuery from 'hooks/useKeywordQuery'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { setKeyword } from 'states/search'

import { SearchIcon } from 'assets/svg'

interface IProps {
  setInputValue: Dispatch<SetStateAction<string>>
}

const RecommendKeyword = ({ setInputValue }: IProps) => {
  const [keywordSelector, setKeywordSelector] = useState(0)

  const dispatch = useAppDispatch()
  const keyword = useSelector((state: RootState) => state.search.keyword)
  const { data } = useKeywordQuery(keyword)

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    setInputValue(e.currentTarget.value)
    dispatch(setKeyword(e.currentTarget.value))
  }

  const keyEventHandler = useCallback(
    (e: KeyboardEvent) => {
      const max = data ? data.length : 0
      if (e.key === 'ArrowUp') {
        setKeywordSelector((prev) => (prev > 0 ? prev - 1 : prev))
      } else if (e.key === 'ArrowDown') {
        setKeywordSelector((prev) => (prev < max - 1 ? prev + 1 : prev))
      }
    },
    [data]
  )

  useEffect(() => {
    window.addEventListener('keydown', keyEventHandler)

    return () => window.removeEventListener('keydown', keyEventHandler)
  }, [keyEventHandler])

  if (!keyword || !data) {
    return <div>검색어를 입력중 입니다.</div>
  }

  if (data.length === 0) {
    return <div>검색 결과가 없습니다.</div>
  }

  return (
    <ul>
      {data.map((item, i) => {
        const newItemNm = item.sickNm.replaceAll(keyword, `<mark>${keyword}<mark>`).split('<mark>')

        return (
          <li className={cx({ [styles.selector]: i === keywordSelector })} key={item.sickCd}>
            <SearchIcon />
            <button type='button' value={item.sickNm} onClick={clickHandler}>
              {newItemNm.map((el) => {
                if (el === keyword) {
                  return <mark>{el}</mark>
                }

                return el
              })}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default RecommendKeyword
