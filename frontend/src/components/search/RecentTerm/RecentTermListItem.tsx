import * as r from '@components/search/RecentTerm/RecentTermListItem.styled'

const RecentTermListItem = (props: { value: string }) => {
  const { value } = props

  return <r.Wrap key={value}>{value}</r.Wrap>
}

export default RecentTermListItem
