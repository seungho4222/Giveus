import { PaymentType, PointPayType } from '@/types/paymentType'
import { authRequest } from '@/utils/requestMethods'

const url = '/api/v1/payment'

// 카카오페이 결제
export const kakaoPayReady = async (params: PaymentType) =>
  authRequest
    .post(`${url}/kakao/donate/ready`, params)
    .then(res => {
      return res.data
    })
    .catch(err => console.log(err))

// 토스 페이 결제
export const tossPayReady = async (params: PaymentType) =>
  authRequest
    .post(`${url}/toss/donate/ready`, params)
    .then(res => {
      return res.data
    })
    .catch(err => console.log(err))

// 포인트로만 결제
export const pointPay = async (params: PointPayType) =>
  authRequest
    .post(`${url}/point`, params)
    .then(res => {
      return res.data
    })
    .catch(err => console.log(err))

// 회원 포인트 내역 조회
export const fetchMemberPoints = (memberNo: number) =>
  authRequest
    .get(`${url}/point/${memberNo}`)
    .then(res => res.data.data)
    .catch(err => console.log(err))
