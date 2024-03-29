import RechargePay from '@components/recharge/RechargePay'
import RechargePoint from '@components/recharge/RechargePoint'
import MypagePrevHeader from '@components/mypage/MypagePrevHeader'
import RechargeTerm from '@components/recharge/RechargeTerm'
import * as r from '@pages/mypage/recharge/RechargePage.styled'
import RechargeBottom from '@components/recharge/RechargeBottom'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { kakaoPayPointReady, tossPayPointReady } from '@/apis/payment'
import { useRecoilValue } from 'recoil'
import { userState } from '@/stores/user'

const RechargePage = () => {
  const user = useRecoilValue(userState)
  const [amount, setAmount] = useState<string>('0')
  const [payment, setPayment] = useState<string>('toss')

  const { mutate: kakaoMutate } = useMutation({
    mutationKey: ['kakaoPayReady'],
    mutationFn: kakaoPayPointReady,
    onSuccess(result) {
      console.log('등록 성공', result)
      window.location.href = result.data.next_redirect_pc_url
    },
    onError(error) {
      console.error('등록 실패:', error)
      alert('결제에 실패하였습니다')
    },
  })

  const { mutate: tossMutate } = useMutation({
    mutationKey: ['tossPayReady'],
    mutationFn: tossPayPointReady,
    onSuccess(result) {
      console.log('등록 성공', result)
    },
    onError(error) {
      console.error('등록 실패:', error)
      alert('결제에 실패하였습니다')
    },
  })

  const onRecharge = () => {
    let pointData = {
      memberNo: 1,
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
