import RechargePay from '@components/recharge/RechargePay'
import RechargePoint from '@components/recharge/RechargePoint'
import MypagePrevHeader from '@components/mypage/MypagePrevHeader'
import RechargeTerm from '@components/recharge/RechargeTerm'
import * as r from '@pages/mypage/recharge/RechargePage.styled'
import RechargeBottom from '@components/recharge/RechargeBottom'
import { useState } from 'react'
import { useNavigate } from 'react-router'

const RechargePage = () => {
  const [amount, setAmount] = useState<string>('0')
  const [payment, setPayment] = useState<string>('toss')

  const navigate = useNavigate()

  const onRecharge = () => {
    console.log('금액 : ', amount)
    console.log('결제수단 : ', payment)
    navigate('/mypage/recharge/done', { replace: true })
  }

  return (
    <r.Container>
      <MypagePrevHeader title="포인트 충전" url="/mypage/points" />
      <RechargePoint value={amount} setValue={setAmount} />
      <RechargePay value={payment} setValue={setPayment} />
      <RechargeTerm />
      <RechargeBottom amount={amount} onRecharge={onRecharge} />
    </r.Container>
  )
}

export default RechargePage
