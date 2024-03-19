import Navbar from '@common/Navbar'
import Layout from '@common/Layout'
import SearchForm from '@components/search/SearchForm'
import RecentTerm from '@components/search/RecentTerm'
import SearchResult from '@components/search/SearchResult'
import { useState } from 'react'
import { deleteBlank } from '@utils/regexMethods'

const SearchPage = () => {
  const [value, setValue] = useState('')
  const [keyword, setKeyword] = useState('')

  // 검색
  const onSearch = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addRecentTerm(value)
      setKeyword(value)
      setValue('')
    }
  }

  // 검색어 reset
  const resetKeyword = () => {
    setKeyword('')
    setValue('')
  }

  // 최근 검색어 localstorage에 저장
  const addRecentTerm = (term: string) => {
    let prev: string[] = JSON.parse(localStorage.getItem('recentTerm') || '[]')

    term = deleteBlank(term)
    prev = prev.filter(item => item !== term)
    prev.unshift(term)
    prev.length > 10 && prev.pop()
    localStorage.setItem('recentTerm', JSON.stringify(prev))
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
