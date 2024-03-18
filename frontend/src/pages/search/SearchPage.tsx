import Navbar from '@common/Navbar'
import Layout from '@common/Layout'
import SearchForm from '@components/search/SearchForm'
import RecentTerm from '@components/search/RecentTerm'
import SearchResult from '@components/search/SearchResult'
import { useState } from 'react'

const SearchPage = () => {
  const [value, setValue] = useState('')
  const [keyword, setKeyword] = useState('')

  // 검색
  const onSearch = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      setKeyword(value)
      setValue('')
    }
  }

  // 검색어 reset
  const resetKeyword = () => {
    setKeyword('')
    setValue('')
  }

  return (
    <>
      <Layout>
        <SearchForm
          value={value}
          setValue={setValue}
          onSearch={onSearch}
          resetKeyword={resetKeyword}
        />
        {/* {keyword === '' ? <RecentTerm /> : <SearchResult />} */}
        <RecentTerm />
      </Layout>
      <Navbar current="search" />
    </>
  )
}

export default SearchPage
