import { formatAmount } from '@utils/format'
import FullButton from '@common/FullButton'
import * as r from '@components/recharge/RechargeBottom/RechargeBottom.styled'

const Index = (props: { amount: string; onRecharge: () => void }) => {
  const { amount, onRecharge } = props

  return (
    <r.Container>
      <r.Label>
        <input type="checkbox" /> 이용약관에 동의하고 신청 절차를 진행할게요.
      </r.Label>
      <FullButton
        text={`${formatAmount(Number(amount))}원 충전하기`}
        disabled={false}
        onClick={onRecharge}
      />
    </r.Container>
  )
}

export default Index
