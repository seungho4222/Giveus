import { keywordState } from '@stores/search'
import { themeState } from '@stores/theme'
import * as r from '@components/search/RecentTerm/RecentTermListItem.styled'
import { useRecoilValue, useSetRecoilState } from 'recoil'

const RecentTermListItem = (props: { value: string }) => {
  const theme = useRecoilValue(themeState)
  const setKeyword = useSetRecoilState(keywordState)

  const { value } = props

  return (
    <r.Wrap key={value} onClick={() => setKeyword(value)} $theme={theme}>
      {value}
    </r.Wrap>
  )
}

export default RecentTermListItem
