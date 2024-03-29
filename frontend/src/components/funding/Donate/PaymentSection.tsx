import * as p from '@components/funding/Donate/PaymentSection.styled'
import { themeState } from '@stores/theme'
import { DonatePaymentSectionType } from '@/types/donateType'
import { useRecoilValue } from 'recoil'

const PaymentSection = (props: DonatePaymentSectionType) => {
  const { payment, setPayment } = props
  const theme = useRecoilValue(themeState)

  return (
    <p.Container>
      <p.SectionTitle>결제 수단</p.SectionTitle>
      <p.Wrap>
        <p.Button
          $active={payment === 'toss'}
          onClick={() => setPayment('toss')}
        >
          <p.RadioInut
            type="radio"
            name="payment"
            checked={payment === 'toss'}
            readOnly
          />
          <p.Logo
            src={'/img/img_logo_tosspay' + (theme ? '' : '_white') + '.png'}
          />
        </p.Button>
        <p.Button
          $active={payment === 'kakao'}
          onClick={() => setPayment('kakao')}
        >
          <p.RadioInut
            type="radio"
            name="payment"
            checked={payment === 'kakao'}
            readOnly
          />
          <p.Logo src="/img/img_logo_kakaopay.png" />
        </p.Button>
      </p.Wrap>
    </p.Container>
  )
}

export default PaymentSection
