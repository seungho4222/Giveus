import * as c from '@/components/funding/FundingListCard/FundingListCard.styled'
import FundingInfo from './FundingInfo'
import FundingStatus from './FundingStatus'
import { FundingType } from '@/types/fundingType'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { fundingDetailState } from '@/stores/fundingState'

const Index = (props: { data: FundingType }) => {
  const { data } = props
  const navigate = useNavigate()
  const setFundingDetail = useSetRecoilState(fundingDetailState)

  const onClickHanlder = () => {
    setFundingDetail(data)
    navigate(`/funding/${data.fundingNo}/detail-main`)
  }

  return (
    <c.Container onClick={() => onClickHanlder()}>
      <c.Img src="/img/img_data.png" alt="" />
      <c.Wrap>
        <FundingInfo data={data} />
        <FundingStatus data={data} />
      </c.Wrap>
    </c.Container>
  )
}

export default Index
