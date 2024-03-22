import * as r from '@components/recharge/RechargePay/RechargePay.styled'

const Index = () => {
  return (
    <r.Container>
      <r.Title>결제 수단</r.Title>
      <r.Wrap>
        <r.Label $active>
          <r.RadioInut type="radio" name="payment" readOnly />
          <r.Logo src="/img/img_logo_tosspay.png" />
        </r.Label>
        <r.Label $active={false}>
          <r.RadioInut type="radio" name="payment" readOnly />
          <r.Logo src="/img/img_logo_kakaopay.png" />
        </r.Label>
      </r.Wrap>
    </r.Container>
  )
}

export default Index
