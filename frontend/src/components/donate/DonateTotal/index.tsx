import { DonatedFundingListType, DonatedFundingType } from '@/types/mypageType'
import { formatAmount } from '@/utils/format'
import * as d from '@components/donate/DonateTotal/DonateTotal.styled'

const Index = (props: DonatedFundingListType) => {
  const { donatedFunding } = props

  const totalAmount = () => {
    return donatedFunding.reduce(
      (acc: number, cur: DonatedFundingType) => acc + cur.amount,
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
