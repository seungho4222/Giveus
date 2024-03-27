import { RecentParticipantType } from '@/types/fundingType'
import { elapsedTime } from '@utils/dateMethods'
import { formatAmount } from '@utils/format'
import * as c from '@components/home/HomeContributors/ContributorInfo.styled'

const ContributorInfo = (props: { item: RecentParticipantType }) => {
  const { item } = props

  return (
    <c.Container>
      <c.Profile src={item.imageUrl} alt="" />
      <c.InfoWrap>
        <b>{item.name}</b>
        <div>{formatAmount(item.amount)}원</div>
      </c.InfoWrap>
      <c.DateWrap>
        <div>{item.createdAt.split('T')[0]}</div>
        <div>{elapsedTime(item.createdAt)}</div>
      </c.DateWrap>
    </c.Container>
  )
}

export default ContributorInfo
