interface IRecommendKeywordItem {
  keyword: string
  sickNm: string
}

const RecommendKeywordItem = ({ keyword, sickNm }: IRecommendKeywordItem) => {
  const test = sickNm.replaceAll(keyword, `<mark>${keyword}<mark>`).split('<mark>')

  return (
    <>
      {test.map((item, i) => {
        const key = `${item}-${i}`
        if (item.includes(keyword)) {
          return <mark key={key}>{item}</mark>
        }

        return item
      })}
    </>
  )
}

export default RecommendKeywordItem
