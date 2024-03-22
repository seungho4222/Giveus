import * as c from '@/components/funding/FundingListCard/FundingListCard.styled'
import FundingInfo from './FundingInfo'
import FundingStatus from './FundingStatus'
import { FundingType } from '@/types/fundingType'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { prevUrlState } from '@/stores/funding'

const Index = (props: { data: FundingType }) => {
  const { data } = props
  const navigate = useNavigate()
  const setPrevUrl = useSetRecoilState(prevUrlState)

  const onClickHanlder = () => {
    setPrevUrl(window.location.pathname)
    navigate(`/funding/${data.fundingNo}/detail-main`)
  }

  return (
    <c.Container onClick={() => onClickHanlder()}>
      <c.Img src={data.thumbnailUrl} alt="" />
      <c.Wrap>
        <FundingInfo data={data} />
        <FundingStatus data={data} />
      </c.Wrap>
    </c.Container>
  )
}

export default Index
