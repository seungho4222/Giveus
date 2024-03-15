import { Dispatch, SetStateAction } from 'react'

export type DonateAmountSectionType = {
  amount: number
  setAmount: Dispatch<SetStateAction<number>>
  point: number
  setPoint: Dispatch<SetStateAction<number>>
}

export type DonatePaymentSectionType = {
  payment: 'toss' | 'kakao'
  setPayment: Dispatch<SetStateAction<'toss' | 'kakao'>>
}
