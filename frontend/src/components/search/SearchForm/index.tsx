import { themeState } from '@stores/theme'
import { SearchFormType } from '@/types/searchType'
import * as s from '@components/search/SearchForm/SearchForm.styled'
import { KeyboardEvent } from 'react'
import { useRecoilValue } from 'recoil'

const Index = (props: SearchFormType) => {
  const theme = useRecoilValue(themeState)
  const { value, setValue, onSearch, resetKeyword } = props

  const onKeyDown = (e: KeyboardEvent<Element>) => onSearch(value, e)

  return (
    <s.Container>
      <s.Input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="검색어를 입력해주세요"
        type="search"
        enterKeyHint="search"
        onKeyDown={onKeyDown}
        $theme={theme}
      />
      <s.Xbutton>
        <img
          src={
            theme === 1
              ? '/icon/icon_close_black.png'
              : '/icon/icon_close_white.png'
          }
          alt=""
          onClick={resetKeyword}
        />
      </s.Xbutton>
    </s.Container>
  )
}

export default Index
