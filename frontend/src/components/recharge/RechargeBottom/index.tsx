import { formatAmount } from '@utils/format'
import FullButton from '@common/FullButton'
import * as r from '@components/recharge/RechargeBottom/RechargeBottom.styled'
import { useState } from 'react'

const Index = (props: { amount: string; onRecharge: () => void }) => {
  const { amount, onRecharge } = props

  const [checked, setChecked] = useState<number>(1)

  return (
    <r.Container>
      <r.Label>
        <input
          type="checkbox"
          value={checked}
          checked={checked === 1}
          onChange={() => setChecked(checked === 1 ? 0 : 1)}
        />
        이용약관에 동의하고 신청 절차를 진행할게요.
      </r.Label>
      <FullButton
        text={`${formatAmount(Number(amount))}원 충전하기`}
        disabled={Number(amount) <= 0 || checked === 0}
        onClick={onRecharge}
      />
    </r.Container>
  )
}

export default Index
