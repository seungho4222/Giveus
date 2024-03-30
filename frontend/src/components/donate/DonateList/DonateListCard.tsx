import { UserDonationsType } from '@/types/fundingType'
import { formatAmount } from '@/utils/format'
import { dDay } from '@/utils/fundingInfoAdd'
import * as d from '@components/donate/DonateList/DonateListCard.styled'

const DonateListCard = (props: { data: UserDonationsType }) => {
  const { data } = props
  const dday = dDay(data.endDate)

  return (
    <d.Container>
      <d.Img src={data.thumbnailUrl} alt="" />
      <d.Wrap>
        <d.Dday $isDone={dday === '완료됨'}>{dday}</d.Dday>
        <d.Title>{data.title}</d.Title>
        <d.Amount>{formatAmount(data.amount)}원 후원</d.Amount>
      </d.Wrap>
    </d.Container>
  )
}

export default DonateListCard
