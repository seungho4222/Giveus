import Navbar from '@common/Navbar'
import Layout from '@common/Layout'
import SearchForm from '@components/search/SearchForm'
import RecentTerm from '@components/search/RecentTerm'
import SearchResult from '@components/search/SearchResult'
import { useState } from 'react'

const SearchPage = () => {
  const [term, setTerm] = useState('')

  // 검색
  const onSearch = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setTerm('')
    }
  }

  return (
    <>
      <Layout>
        <SearchForm value={term} setValue={setTerm} onSearch={onSearch} />
        <RecentTerm />
        <SearchResult />
      </Layout>
      <Navbar current="search" />
    </>
  )
}

export default SearchPage
