import { UserDonationsType } from '@/types/fundingType'
import { formatAmount } from '@/utils/format'
import * as d from '@components/donate/DonateTotal/DonateTotal.styled'

const Index = (props: { userDonations: UserDonationsType[] }) => {
  const { userDonations } = props

  const totalAmount = () => {
    return userDonations.reduce(
      (acc: number, cur: UserDonationsType) => acc + cur.amount,
      0,
    )
  }

  return (
    <d.Container>
      <d.Desc>총 후원 금액</d.Desc>
      <d.Amount>{formatAmount(totalAmount())}원</d.Amount>
    </d.Container>
  )
}

export default Index
