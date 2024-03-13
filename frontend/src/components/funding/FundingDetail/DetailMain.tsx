import * as D from '@/components/funding/FundingDetail/DetailMain.styled'
import { FundingType } from "@/types/fundingType";


const MainDesc = (props: { data: FundingType }) => {
  const { data } = props

  return (
    <D.Container>
      <D.DetailInfo>
        {data.title}
      </D.DetailInfo>
      <D.DetailDesc>
        ddd
      </D.DetailDesc>
    </D.Container>
  );
};

export default MainDesc;