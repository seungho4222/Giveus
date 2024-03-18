import { FundingType } from '@/types/fundingType';
import * as f from '@components/funding/FundingListCount/FundingListCount.styled'

const Index = (props: { data: FundingType[] }) => {
  const { data } = props
  
  return (
    <f.Container>
      <f.TotalCount>
        총 {data.length > 0 && data.length}건
      </f.TotalCount>
    </f.Container>
  );
};

export default Index;