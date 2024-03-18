import { StringStateType } from '@/types/commonType'
import * as s from '@components/search/SearchForm/SearchForm.styled'

const Index = (props: StringStateType) => {
  const { value, setValue } = props

  return (
    <s.Container>
      <s.Input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="검색어를 입력해주세요"
        type="search"
        enterKeyHint="search"
      />
      <s.Xbutton>
        <img src="/icon/icon_close_black.png" alt="" />
      </s.Xbutton>
    </s.Container>
  )
}

export default Index
