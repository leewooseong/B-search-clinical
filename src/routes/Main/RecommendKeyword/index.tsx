import styles from './RecommendKeyword.module.scss'
import { Dispatch, SetStateAction, useRef, useState, FocusEvent, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'states'

import useKeywordQuery from 'hooks/useKeywordQuery'

import { SearchIcon } from 'assets/svg'

interface IProps {
  setInputValue: Dispatch<SetStateAction<string>>
}

const RecommendKeyword = ({ setInputValue }: IProps) => {
  const { keyword } = useSelector((state: RootState) => state.search)
  const { data } = useKeywordQuery(keyword)

  const [autoFrame, setAutoFrame] = useState(-1)
  const autoFrameRef = useRef<HTMLButtonElement[] | null[]>([])

  const focusHandler = (e: FocusEvent<HTMLButtonElement>) => {
    setInputValue(e.currentTarget.value)
  }

  const keyEvent = useCallback(
    (e: globalThis.KeyboardEvent) => {
      if (e.isComposing === true) return

      const size = autoFrameRef.current.length
      switch (e.key) {
        case 'ArrowUp':
          setAutoFrame((prev) => (prev > 0 ? prev - 1 : size - 1))
          break
        case 'ArrowDown':
          setAutoFrame((prev) => (prev < size - 1 ? prev + 1 : 0))
      }
    },
    [autoFrameRef]
  )

  useEffect(() => {
    setAutoFrame(-1)
  }, [keyword])

  useEffect(() => {
    autoFrameRef.current[autoFrame]?.focus()
  }, [autoFrame])

  useEffect(() => {
    window.addEventListener('keydown', keyEvent)

    return () => window.removeEventListener('keydown', keyEvent)
  }, [keyEvent])

  if (!keyword || !data) {
    return <p>검색어를 입력중 입니다.</p>
  }

  if (data.length === 0) {
    return <p>검색 결과가 없습니다.</p>
  }

  return (
    <ul>
      {data.map((item, i) => (
        <li tabIndex={i} className={styles.selected} key={item.sickCd}>
          <SearchIcon />
          <button
            onFocus={focusHandler}
            ref={(el) => {
              autoFrameRef.current[i] = el
            }}
            type='button'
            value={item.sickNm}
          >
            {item.sickNm}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default RecommendKeyword
