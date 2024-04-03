import RechargePay from '@components/recharge/RechargePay'
import RechargePoint from '@components/recharge/RechargePoint'
import MypagePrevHeader from '@components/mypage/MypagePrevHeader'
import RechargeTerm from '@components/recharge/RechargeTerm'
import * as r from '@pages/mypage/recharge/RechargePage.styled'
import RechargeBottom from '@components/recharge/RechargeBottom'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { kakaoPayRechargeReady, tossPayRechargeReady } from '@/apis/payment'
import { useRecoilValue } from 'recoil'
import { userState } from '@/stores/user'

const RechargePage = () => {
  const user = useRecoilValue(userState)
  const [amount, setAmount] = useState<string>('0')
  const [payment, setPayment] = useState<string>('toss')

  // 카카오페이 충전
  const { mutate: kakaoMutate } = useMutation({
    mutationKey: ['kakaoPayRechargeReady'],
    mutationFn: kakaoPayRechargeReady,
    onSuccess(result) {
      console.log('등록 성공', result)
      window.location.href = result.next_redirect_app_url
    },
    onError(error) {
      console.error('등록 실패:', error)
      alert('결제에 실패하였습니다')
    },
  })

  // 토스페이 충전
  const clientKey = 'test_ck_ALnQvDd2VJLgDMn6Xv6P8Mj7X41m'
  const tossPayments = window.TossPayments(clientKey)

  const { mutate: tossMutate } = useMutation({
    mutationKey: ['tossPayRechargeReady'],
    mutationFn: tossPayRechargeReady,
    onSuccess(result) {
      console.log('등록 성공', result)
      const paymentData = result.data
      tossPayments.requestPayment('CARD', paymentData)
    },
    onError(error) {
      console.error('등록 실패:', error)
      alert('결제에 실패하였습니다')
    },
  })

  const onRecharge = () => {
    let pointData = {
      memberNo: user.memberNo,
      amount: Number(amount),
    }
    if (payment === 'kakao') {
      kakaoMutate(pointData)
    } else tossMutate(pointData)
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
