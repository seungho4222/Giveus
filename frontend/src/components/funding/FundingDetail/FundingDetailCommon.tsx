import * as c from '@/components/funding/FundingDetail/FundingDetailCommon.styled'
import { FundingType } from '@/types/fundingType'
import { useNavigate } from 'react-router-dom'

const FundingDetailCommon = (props: { data: FundingType }) => {
  const { data } = props
  const navigate = useNavigate()

  return (
    <c.Container $img={data.thumbnailUrl}>
      <c.BackBtn
        src="/icon/icon_backBtn.png"
        onClick={() =>
          navigate(
            window.location.pathname.includes('funding')
              ? '/funding'
              : '/search',
          )
        }
      />
      <c.Wrap>
        <c.Title>{data.title}</c.Title>
        <c.Status $status={data.status === '진행중'}>{data.status}</c.Status>
      </c.Wrap>
    </c.Container>
  )
}

export default FundingDetailCommon
