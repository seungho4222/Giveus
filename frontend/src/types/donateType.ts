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

export type DonateAnonymousSectionType = {
  isPublic: boolean
  setIsPublic: Dispatch<SetStateAction<boolean>>
}

export type DonateFinalAmountSectionType = {
  amount: number
  point: number
}
