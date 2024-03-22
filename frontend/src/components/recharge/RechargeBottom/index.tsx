import FullButton from '@common/FullButton'
import * as r from '@components/recharge/RechargeBottom/RechargeBottom.styled'

const Index = () => {
  return (
    <r.Container>
      <r.Label>
        <input type="checkbox" /> 이용약관에 동의하고 신청 절차를 진행할게요.
      </r.Label>
      <FullButton
        text="70000원 충전하기"
        disabled={false}
        onClick={() => console.log('충전하기')}
      />
    </r.Container>
  )
}

export default Index
