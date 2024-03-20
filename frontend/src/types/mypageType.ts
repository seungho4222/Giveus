import { Dispatch, SetStateAction } from 'react'
import { BooleanStateType } from '@/types/commonType'

export type DateInputType = {
  startDate: string
  setStartDate: Dispatch<SetStateAction<string>>
  endDate: string
  setEndDate: Dispatch<SetStateAction<string>>
}

export type PointsFilterType = {
  setOpen: Dispatch<SetStateAction<boolean>>
  type: string
  startDate: string
  endDate: string
}

export type PointsFilterModalType = {
  type: string
  setType: Dispatch<SetStateAction<string>>
} & BooleanStateType &
  DateInputType

// 포인트 사용내역 타입
export type usagePointType = {
  pointNo: number
  memberNo: number
  amount: number
  createdAt: string
  content: string
}

// 포인트 충전 내역 타입
export type rechargePointType = {
  paymentType: string
} & usagePointType
