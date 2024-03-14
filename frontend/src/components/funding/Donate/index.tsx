import * as d from '@/components/funding/Donate/Donate.styled'
import AmountSection from './AmountSection'
import PaymentSection from './PaymentSection'
import AnonymousSection from './AnonymousSection'
import FinalAmountSection from './FinalAmountSection'

const Index = () => {
  return (
    <d.Container>
      <AmountSection />
      <PaymentSection />
      <AnonymousSection />
      <FinalAmountSection />
    </d.Container>
  )
}

export default Index
