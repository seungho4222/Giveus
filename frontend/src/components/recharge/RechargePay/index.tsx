import { StringStateType } from '@/types/commonType'
import * as r from '@components/recharge/RechargePay/RechargePay.styled'

const Index = (props: StringStateType) => {
  const { value, setValue } = props

  return (
    <r.Container>
      <r.Title>결제 수단</r.Title>
      <r.Wrap>
        <r.Label $active={value === 'toss'} onClick={() => setValue('toss')}>
          <r.RadioInut type="radio" name="payment" readOnly />
          <r.Logo src="/img/img_logo_tosspay.png" />
        </r.Label>
        <r.Label $active={value === 'kakao'} onClick={() => setValue('kakao')}>
          <r.RadioInut type="radio" name="payment" readOnly />
          <r.Logo src="/img/img_logo_kakaopay.png" />
        </r.Label>
      </r.Wrap>
    </r.Container>
  )
}

export default Index
