import * as C from '@/components/funding/FundingDetail/FundingDetailCommon.styled'
import { FundingType } from '@/types/fundingType'
import { Link } from 'react-router-dom'

const FundingDetailCommon = (props: { data: FundingType }) => {
  const { data } = props

  return (
    <C.Container>
      <Link to="/funding">
        <C.BackBtn src="/icon/icon_backBtn.png" />
      </Link>
      <C.Wrap>
        <C.Title>{data.title}</C.Title>
        <C.Status>{data.status}</C.Status>
      </C.Wrap>
    </C.Container>
  )
}

export default FundingDetailCommon
