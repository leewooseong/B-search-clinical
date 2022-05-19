import styles from './Main.module.scss'
import { ChangeEvent, FormEvent, useMemo, useState } from 'react'
import { debounce } from 'lodash'

import { useAppDispatch } from 'hooks/useAppDispatch'
import { setKeyword } from 'states/search'

import { SearchIcon } from '../../assets/svg'
import RecommendKeyword from './RecommendKeyword'

const Main = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useAppDispatch()
  const setGlobalKeyword = useMemo(() => debounce((value) => dispatch(setKeyword(value)), 500), [dispatch])

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value)
    setGlobalKeyword(e.currentTarget.value)
  }

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        국내 모든 임상시험 검색하고
        <br /> 온라인으로 참여하기
      </h1>
      <form className={styles.desktop} onSubmit={onSubmitHandler}>
        <div className={styles.searchBox}>
          <SearchIcon />
          <input type='text' value={inputValue} onChange={onChangeHandler} placeholder='질환명을 입력해주세요.' />
        </div>
        <button type='submit'>검색</button>
      </form>
      {inputValue && <RecommendKeyword test={setInputValue} />}
    </main>
  )
}

export default Main
