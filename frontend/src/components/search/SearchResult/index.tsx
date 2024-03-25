import { FundingType } from '@/types/fundingType'
import FundingListCard from '@components/funding/FundingListCard'
import * as s from '@components/search/SearchResult/SearchResult.styled'

const Index = (props: { result: FundingType[] }) => {
  const { result } = props

  return (
    <s.Container>
      <s.Title>총 {result.length}건</s.Title>
      {result.length === 0 ? (
        <s.Empty>검색 결과가 없습니다</s.Empty>
      ) : (
        <s.ScrollArea>
          {result.map(item => (
            <FundingListCard data={item} key={item.fundingNo} />
          ))}
        </s.ScrollArea>
      )}
    </s.Container>
  )
}

export default Index
