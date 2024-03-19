import { keywordState } from '@/stores/search'
import * as r from '@components/search/RecentTerm/RecentTermListItem.styled'
import { useSetRecoilState } from 'recoil'

const RecentTermListItem = (props: { value: string }) => {
  const setKeyword = useSetRecoilState(keywordState)

  const { value } = props

  return (
    <r.Wrap key={value} onClick={() => setKeyword(value)}>
      {value}
    </r.Wrap>
  )
}

export default RecentTermListItem
