import * as r from '@components/search/RecentTerm/RecentTermList.styled'
import RecentTermListItem from '@components/search/RecentTerm/RecentTermListItem'

const RecentTermList = (props: { terms: string[] }) => {
  const { terms } = props

  return (
    <r.Container>
      {terms &&
        terms.map((item: string, index: number) => (
          <RecentTermListItem key={index} value={item} />
        ))}
    </r.Container>
  )
}

export default RecentTermList
