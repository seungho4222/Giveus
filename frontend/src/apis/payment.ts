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

// 카카오페이 결제 성공
export const kakaoPayDonateSuccess = async (params: string) =>
  authRequest
    .get(`${url}/kakao/donate/success${params}`)
    .then(res => {
      console.log(res.data)
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

// 토스페이 결제 성공
export const tossPayDonateSuccess = async (params: string) =>
  authRequest
    .get(`${url}/toss/donate/success${params}`)
    .then(res => {
      console.log(res.data)
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
export const kakaoPayRechargeReady = async (params: PointChargeType) =>
  authRequest
    .post(`${url}/kakao/recharge/ready`, params)
    .then(res => {
      return res.data
    })
    .catch(err => console.log(err))

// 카카오페이 포인트 충전 성공
export const kakaoPayRechargeSuccess = async (params: string) =>
  authRequest
    .get(`${url}/kakao/recharge/success${params}`)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => console.log(err))

// 토스페이 포인트 충전
export const tossPayRechargeReady = async (params: PointChargeType) =>
  authRequest
    .post(`${url}/toss/recharge/ready`, params)
    .then(res => {
      return res.data
    })
    .catch(err => console.log(err))

// 토스페이 포인트 충전 성공
export const tossPayRechargeSuccess = async (params: string) =>
  authRequest
    .get(`${url}/toss/recharge/success${params}`)
    .then(res => {
      console.log(res.data)
    })
    .catch(err => console.log(err))

// 회원 포인트 내역 조회
export const fetchMemberPoints = (memberNo: number) =>
  authRequest
    .get(`${url}/point/${memberNo}`)
    .then(res => res.data.data)
    .catch(err => console.log(err))
