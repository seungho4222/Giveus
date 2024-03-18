import * as f from '@/components/funding/Donate/FinalAmountSection.styled'
import { DonateFinalAmountSectionType } from '@/types/donateType'

const FinalAmountSection = (props: DonateFinalAmountSectionType) => {
  const { amount, point } = props

  return (
    <f.Container>
      <f.Wrap>
        <f.SectionTitle>최종 결제금액</f.SectionTitle>
        <f.TotalAmount>{(amount+point).toLocaleString('ko-KR')}원</f.TotalAmount>
      </f.Wrap>
    </f.Container>
  )
}

export default FinalAmountSection
