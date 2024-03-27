import { formatAmount } from '@/utils/format'
import * as s from '@components/home/HomeSoonOver/SoonOverItem.styled'

const SoonOverItem = () => {
  return (
    <s.Container>
      <s.Image src="/img/img_data.png" alt="" />
      <s.InfoWrap>
        <span>모금 임박</span>
        <s.Name>소아암 6세(남) 펀딩</s.Name>
        <s.Amount>모금액 {formatAmount(50000000)}원</s.Amount>
      </s.InfoWrap>
      <s.Percent>98%</s.Percent>
    </s.Container>
  )
}

export default SoonOverItem
