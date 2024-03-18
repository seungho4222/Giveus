import * as r from '@components/search/RecentTerm/RecentTermHeader.styled'

const RecentTermHeader = () => {
  return (
    <r.Container>
      <r.Title>최근 검색어</r.Title>
      <r.Button>지우기</r.Button>
    </r.Container>
  )
}

export default RecentTermHeader
