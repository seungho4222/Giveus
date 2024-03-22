import RechargePay from '@components/recharge/RechargePay'
import RechargePoint from '@components/recharge/RechargePoint'
import MypagePrevHeader from '@components/mypage/MypagePrevHeader'
import RechargeTerm from '@components/recharge/RechargeTerm'
import * as r from '@pages/mypage/recharge/RechargePage.styled'
import RechargeBottom from '@components/recharge/RechargeBottom'

const RechargePage = () => {
  return (
    <r.Container>
      <MypagePrevHeader title="포인트 충전" />
      <RechargePoint />
      <RechargePay />
      <RechargeTerm />
      <RechargeBottom />
    </r.Container>
  )
}

export default RechargePage
