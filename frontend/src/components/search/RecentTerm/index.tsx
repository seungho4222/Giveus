import * as r from '@components/search/RecentTerm/RecentTerm.styled'
import RecentTermHeader from '@components/search/RecentTerm/RecentTermHeader'
import RecentTermList from '@components/search/RecentTerm/RecentTermList'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

const Index = () => {
  const storage = localStorage.getItem('recentTerm')
  const [terms, setTerms] = useState([])

  useEffect(() => {
    storage && setTerms(JSON.parse(storage))
  }, [storage])

  // 최근 검색어 모두 삭제
  const resetTerms = () => {
    localStorage.removeItem('recentTerm')
    setTerms([])
  }

  return (
    <r.Container>
      <RecentTermHeader resetTerms={resetTerms} />
      {terms.length === 0 ? (
        <r.EmptyText>검색 내역이 없습니다.</r.EmptyText>
      ) : (
        <RecentTermList terms={terms} />
      )}
    </r.Container>
  )
}

export default Index
