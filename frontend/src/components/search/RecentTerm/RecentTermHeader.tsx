import * as r from '@components/search/RecentTerm/RecentTermHeader.styled'

const RecentTermHeader = (props: { resetTerms: () => void }) => {
  const { resetTerms } = props

  return (
    <r.Container>
      <r.Title>최근 검색어</r.Title>
      <r.Button onClick={resetTerms}>지우기</r.Button>
    </r.Container>
  )
}

export default RecentTermHeader
