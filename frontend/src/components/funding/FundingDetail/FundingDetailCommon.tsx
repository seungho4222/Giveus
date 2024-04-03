import * as c from '@/components/funding/FundingDetail/FundingDetailCommon.styled'
import { prevUrlState } from '@/stores/funding'
import { FundingType } from '@/types/fundingType'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

const FundingDetailCommon = (props: { data: FundingType }) => {
  const { data } = props
  const navigate = useNavigate()
  const prevUrl = useRecoilValue(prevUrlState)

  return (
    <c.Container $img={data.thumbnailUrl}>
      <c.BackBtn
        src="/icon/icon_backBtn.png"
        alt=''
        onClick={() => navigate(prevUrl)}
      />
      <c.Wrap>
        <c.Title>{data.title}</c.Title>
        <c.Status $status={data.status === '진행중'}>{data.status}</c.Status>
      </c.Wrap>
    </c.Container>
  )
}

export default FundingDetailCommon
