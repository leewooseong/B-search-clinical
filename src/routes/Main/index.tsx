import styles from './Main.module.scss'
import { ChangeEvent, FormEvent, Suspense, useMemo, useState } from 'react'
import { debounce } from 'lodash'
import cx from 'classnames'

import { useAppDispatch } from 'hooks/useAppDispatch'
import { setKeyword } from 'states/search'

import { SearchIcon } from '../../assets/svg'
import RecommendKeyword from './RecommendKeyword'
import SectionSubscribe from './SectionSubscribe'

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
      <main className={styles.main}>
        <h1>
          국내 모든 임상시험 검색하고
          <br /> 온라인으로 참여하기
        </h1>
        <form className={styles.formBox} onSubmit={onSubmitHandler}>
          <SearchIcon className={cx(styles.forPcScreen, styles.searchIcon)} />
          <input type='text' value={inputValue} onChange={onChangeHandler} placeholder='질환명을 입력해주세요.' />

          <button type='submit' className={styles.searchButton}>
            <span className={styles.forPcScreen}>검색</span>
            <SearchIcon className={styles.forMobileScreen} />
          </button>
          {inputValue && (
            <div className={styles.listContainer}>
              <p className={styles.listHeader}>추천 검색어</p>
              <Suspense fallback={<p>로딩중</p>}>
                <RecommendKeyword setInputValue={setInputValue} />
              </Suspense>
            </div>
          )}
        </form>
      </main>
      <SectionSubscribe />
    </>
  )
}

export default Main
