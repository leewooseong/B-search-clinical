import Header from '../Header'
import Footer from '../Footer'
import styles from './Main.module.scss'
import { ChangeEvent, FormEvent, Suspense, useMemo, useState } from 'react'
import { debounce } from 'lodash'

import { useAppDispatch } from 'hooks/useAppDispatch'
import { setKeyword } from 'states/search'

import { SearchIcon } from '../../assets/svg'
import RecommendKeyword from './RecommendKeyword'
import SectionDecoration from './SectionDecoration'

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
    <>
      <Header />
      <main className={styles.main}>
        <h1>
          국내 모든 임상시험 검색하고
          <br /> 온라인으로 참여하기
        </h1>
        <form className={styles.formBox} onSubmit={onSubmitHandler}>
          <div className={styles.searchBox}>
            <SearchIcon className={styles.pc} />
            <input type='text' value={inputValue} onChange={onChangeHandler} placeholder='질환명을 입력해주세요.' />
          </div>
          <button type='submit'>
            <span className={styles.pc}>검색</span>
            <SearchIcon className={styles.mobile} />
          </button>
        </form>
        {inputValue && (
          <div className={styles.listContainer}>
            <h2>추천 검색어</h2>
            <Suspense fallback={<p>로딩중</p>}>
              <RecommendKeyword setInputValue={setInputValue} />
            </Suspense>
          </div>
        )}
      </main>
      <SectionDecoration />
      <Footer />
    </>
  )
}

export default Main
