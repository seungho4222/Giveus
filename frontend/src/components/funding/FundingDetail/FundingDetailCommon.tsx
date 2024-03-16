import * as c from '@/components/funding/FundingDetail/FundingDetailCommon.styled'
import { FundingType } from '@/types/fundingType'
import { Link } from 'react-router-dom'

const FundingDetailCommon = (props: { data: FundingType }) => {
  const { data } = props

  return (
    <c.Container>
      <Link to="/funding">
        <c.BackBtn src="/icon/icon_backBtn.png" />
      </Link>
      <c.Wrap>
        <c.Title>{data.title}</c.Title>
        <c.Status>{data.status}</c.Status>
      </c.Wrap>
    </c.Container>
  )
}

export default FundingDetailCommon
