import { PaymentType, PointChargeType, PointPayType } from '@/types/paymentType'
import { authRequest } from '@/utils/requestMethods'

const url = '/api/v1/payment'

// 카카오페이 결제
export const kakaoPayDonateReady = async (params: PaymentType) =>
  authRequest
    .post(`${url}/kakao/donate/ready`, params)
    .then(res => {
      return res.data
    })
    .catch(err => console.log(err))

// 토스페이 결제
export const tossPayDonateReady = async (params: PaymentType) =>
  authRequest
    .post(`${url}/toss/donate/ready`, params)
    .then(res => {
      return res.data
    })
    .catch(err => console.log(err))

// 포인트로만 결제
export const pointDonate = async (params: PointPayType) =>
  authRequest
    .post(`${url}/point`, params)
    .then(res => {
      return res.data
    })
    .catch(err => console.log(err))

// 카카오페이 포인트 충전
export const kakaoPayPointReady = async (params: PointChargeType) =>
  authRequest
    .post(`${url}/kakao/point/ready`, params)
    .then(res => {
      return res.data
    })
    .catch(err => console.log(err))

// 토스페이 포인트 충전
export const tossPayPointReady = async (params: PointChargeType) =>
  authRequest
    .post(`${url}/toss/point/ready`, params)
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
