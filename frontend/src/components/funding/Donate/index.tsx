import * as d from '@/components/funding/Donate/Donate.styled'
import AmountSection from './AmountSection'
import PaymentSection from './PaymentSection'
import AnonymousSection from './AnonymousSection'
import FinalAmountSection from './FinalAmountSection'
import { useState } from 'react'
import FullButton from '@/common/FullButton'
import { useMutation } from '@tanstack/react-query'
import {
  kakaoPayDonateReady,
  pointDonate,
  tossPayDonateReady,
} from '@/apis/payment'
import { useRecoilValue } from 'recoil'
import { fundingDetailState } from '@/stores/funding'
import { userState } from '@/stores/user'
import { useNavigate } from 'react-router-dom'

declare global {
  interface Window {
    TossPayments: any
  }
}

const Index = () => {
  const navigate = useNavigate()
  const fundingDetail = useRecoilValue(fundingDetailState)
  const user = useRecoilValue(userState)
  const [amount, setAmount] = useState(0)
  const [point, setPoint] = useState(0)
  const [payment, setPayment] = useState<'toss' | 'kakao'>('toss')
  const [isPublic, setIsPublic] = useState(true)

  // 카카오페이 결제
  const { mutate: kakaoMutate } = useMutation({
    mutationKey: ['kakaoPayReady'],
    mutationFn: kakaoPayDonateReady,
    onSuccess(result) {
      console.log('등록 성공', result)
      window.location.href = result.data.next_redirect_app_url
    },
    onError(error) {
      console.error('등록 실패:', error)
      alert('결제에 실패하였습니다')
    },
  })

  // 토스페이 결제
  const clientKey = 'test_ck_ALnQvDd2VJLgDMn6Xv6P8Mj7X41m'
  const tossPayments = window.TossPayments(clientKey)

  const { mutate: tossMutate } = useMutation({
    mutationKey: ['tossPayReady'],
    mutationFn: tossPayDonateReady,
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

  // 포인트로만 결제
  const { mutate: pointMutate } = useMutation({
    mutationKey: ['pointPay'],
    mutationFn: pointDonate,
    onSuccess(result) {
      console.log('등록 성공', result)
      navigate('/funding/donate/done')
    },
    onError(error) {
      console.error('등록 실패:', error)
      alert('결제에 실패하였습니다')
    },
  })

  const HandleDonate = () => {
    if (!amount && point > 0) {
      let pointData = {
        memberNo: user.memberNo,
        fundingNo: fundingDetail.fundingNo,
        amount: point,
        opened: isPublic,
      }

      pointMutate(pointData)
      return
    }

    if (amount) {
      let donateData = {
        memberNo: user.memberNo,
        fundingNo: fundingDetail.fundingNo,
        amount: amount,
        point: point,
        title: fundingDetail.title,
        opened: isPublic,
      }

      if (payment === 'kakao') {
        kakaoMutate(donateData)
      } else {
        tossMutate(donateData)
      }
    }
  }

  return (
    <d.Container>
      <AmountSection
        amount={amount}
        setAmount={setAmount}
        point={point}
        setPoint={setPoint}
      />
      <PaymentSection payment={payment} setPayment={setPayment} />
      <AnonymousSection isPublic={isPublic} setIsPublic={setIsPublic} />
      <FinalAmountSection amount={amount} point={point} />
      <d.Button>
        <FullButton
          text="결제하기"
          disabled={amount + point <= 0}
          onClick={() => HandleDonate()}
        />
      </d.Button>
    </d.Container>
  )
}

export default Index
