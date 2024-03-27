import DetailInfo from '@/components/fundingDetail/DetailInfo'
import DetailReg from '@/components/fundingDetail/DetailReg'
import * as f from '@pages/home/fundingDetail/FundingDetailPage.styled'

const FundingDetailPage = () => {
  return (
    <f.Container>
      <DetailReg />
      <DetailInfo />
    </f.Container>
  )
}

export default FundingDetailPage
