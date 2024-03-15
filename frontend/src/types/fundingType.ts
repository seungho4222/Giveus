import { Dispatch, SetStateAction } from "react"

export type FundingType = {
  id: string,
  title: string,
  start_date: string
  end_date: string,
  status: string,
  total_amount: number,
  target_amount: number,
}

export type DonerType = {
  id: string,
  nickname: string,
  amount: number,
  create_at: string,
}

export type MedicalExpenseType = {
  id: string,
  category: string,
  content: string,
  amount: number,
  count: number,
}

export type DonateAmountSectionType = {
  amount: number
  setAmount: Dispatch<SetStateAction<number>>
  point: number
  setPoint: Dispatch<SetStateAction<number>>
}