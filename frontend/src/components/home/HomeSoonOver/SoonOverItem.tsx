import { FundingType } from '@/types/fundingType'
import { formatAmount } from '@utils/format'
import * as s from '@components/home/HomeSoonOver/SoonOverItem.styled'

const SoonOverItem = (props: { item: FundingType }) => {
  const { item } = props

  return (
    <s.Container>
      <s.Image src={item.thumbnailUrl} alt="" />
      <s.InfoWrap>
        <span>
          {item.totalAmount === item.targetAmount ? '모금 완료' : '모금 임박'}
        </span>
        <s.Name>{item.title}</s.Name>
        <s.Amount>모금액 {formatAmount(item.totalAmount)}원</s.Amount>
      </s.InfoWrap>
      <s.Percent>98%</s.Percent>
    </s.Container>
  )
}

export default SoonOverItem
