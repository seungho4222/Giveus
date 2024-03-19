import { FundingType } from '@/types/fundingType'
import FundingListCard from '@components/funding/FundingListCard'
import * as s from '@components/search/SearchResult/SearchResult.styled'

const Index = (props: { result: FundingType[] }) => {
  const { result } = props

  return (
    <s.Container>
      {result && (
        <>
          <s.Title>총 {result.length}건</s.Title>
          <s.ScrollArea>
            {result.map(item => (
              <FundingListCard data={item} key={item.fundingNo} />
            ))}
          </s.ScrollArea>
        </>
      )}
    </s.Container>
  )
}

export default Index
