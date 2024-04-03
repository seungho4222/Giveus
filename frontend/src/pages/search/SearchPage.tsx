import Navbar from '@common/Navbar'
import Layout from '@common/Layout'
import SearchForm from '@components/search/SearchForm'
import RecentTerm from '@components/search/RecentTerm'
import SearchResult from '@components/search/SearchResult'
import { KeyboardEvent, useEffect, useState } from 'react'
import { deleteBlank } from '@utils/regexMethods'
import { FundingType } from '@/types/fundingType'
import { useRecoilState } from 'recoil'
import { keywordState } from '@stores/search'
import { searchFunding } from '@/apis/funding'
import Seo from '@/common/Seo'

const SearchPage = () => {
  const [value, setValue] = useState('')
  const [keyword, setKeyword] = useRecoilState(keywordState)
  const [result, setResult] = useState<FundingType[]>([])

  useEffect(() => {
    if (keyword !== '') {
      addRecentTerm(keyword)
      searchFunding(keyword).then(res => {
        setResult(res)
      })
      setValue(keyword)
    }
  }, [keyword])

  // 검색
  const onSearch = (value: string, e: KeyboardEvent<Element>) => {
    if (e.key === 'Enter') {
      setKeyword(value)
      addRecentTerm(value)
      searchFunding(value).then(res => {
        setResult(res)
      })
    }
  }

  // 검색어 reset
  const resetKeyword = () => {
    setValue('')
    setKeyword('')
    setResult([])
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
      <Seo
        title="GIVEUS | SearchPage"
        description="여러분의 따뜻한 기부를 기다립니다"
        type="webapp"
      />
      <Layout>
        <SearchForm
          value={value}
          setValue={setValue}
          onSearch={onSearch}
          resetKeyword={resetKeyword}
        />
        {keyword === '' ? <RecentTerm /> : <SearchResult result={result} />}
      </Layout>
      <Navbar current="search" />
    </>
  )
}

export default SearchPage
