import { RecentParticipantType } from '@/types/fundingType'
import { elapsedTime } from '@utils/dateMethods'
import { formatAmount } from '@utils/format'
import * as c from '@components/home/HomeContributors/ContributorInfo.styled'
import { useRecoilValue } from 'recoil'
import { themeState } from '@stores/theme'

const ContributorInfo = (props: { item: RecentParticipantType }) => {
  const theme = useRecoilValue(themeState)
  const { item } = props

  return (
    <c.Container>
      <c.Profile src={item.imageUrl || '/img/img_default_profile.png'} alt="" />
      <c.InfoWrap>
        <b>{item.name}</b>
        <div>{formatAmount(item.amount)}원</div>
      </c.InfoWrap>
      <c.DateWrap $theme={theme}>
        <div>{item.createdAt.split('T')[0]}</div>
        <div>{elapsedTime(item.createdAt)}</div>
      </c.DateWrap>
    </c.Container>
  )
}

export default ContributorInfo
