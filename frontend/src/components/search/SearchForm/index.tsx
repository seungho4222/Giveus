import { SearchFormType } from '@/types/searchType'
import * as s from '@components/search/SearchForm/SearchForm.styled'

const Index = (props: SearchFormType) => {
  const { value, setValue, onSearch, resetKeyword } = props

  return (
    <s.Container>
      <s.Input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="검색어를 입력해주세요"
        type="search"
        enterKeyHint="search"
        onKeyDown={onSearch}
      />
      <s.Xbutton>
        <img src="/icon/icon_close_black.png" alt="" onClick={resetKeyword} />
      </s.Xbutton>
    </s.Container>
  )
}

export default Index
