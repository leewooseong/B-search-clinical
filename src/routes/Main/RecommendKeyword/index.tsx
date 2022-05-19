import styles from './RecommendKeyword.module.scss'
import React, { MouseEvent, Suspense } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'states'

import useKeywordQuery from 'hooks/useKeywordQuery'
import { useAppDispatch } from 'hooks/useAppDispatch'
import { setKeyword } from 'states/search'

import { SearchIcon } from 'assets/svg'

interface IProps {
  setInputValue: React.Dispatch<React.SetStateAction<string>>
}

const RecommendKeyword = ({ setInputValue }: IProps) => {
  const dispatch = useAppDispatch()
  const keyword = useSelector((state: RootState) => state.search.keyword)
  const { data } = useKeywordQuery(keyword)

  const clickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    setInputValue(e.currentTarget.value)
    dispatch(setKeyword(e.currentTarget.value))
  }

  if (!keyword || !data) {
    return <div>검색어를 입력중 입니다.</div>
  }

  if (data.length === 0) {
    return <div>검색 결과가 없습니다.</div>
  }

  return (
    <ul>
      {data.map((item) => (
        <li key={item.sickCd}>
          <SearchIcon />
          <button type='button' value={item.sickNm} onClick={clickHandler}>
            {item.sickNm}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default RecommendKeyword
