import Navbar from '@common/Navbar'
import Layout from '@common/Layout'
import SearchForm from '@components/search/SearchForm'
import RecentTerm from '@components/search/RecentTerm'
import SearchResult from '@components/search/SearchResult'

const SearchPage = () => {
  return (
    <>
      <Layout>
        <SearchForm />
        <RecentTerm />
        <SearchResult />
      </Layout>
      <Navbar current="search" />
    </>
  )
}

export default SearchPage
