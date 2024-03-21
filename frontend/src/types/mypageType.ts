import { Dispatch, SetStateAction } from 'react'

export type DateInputType = {
  startDate: string
  setStartDate: Dispatch<SetStateAction<string>>
  endDate: string
  setEndDate: Dispatch<SetStateAction<string>>
}

export type PointsFilterType = {
  setOpen: Dispatch<SetStateAction<boolean>>
}

// 포인트 사용내역 타입
export type UsagePointType = {
  pointNo: number
  memberNo: number
  amount: number
  createdAt: string
  content: string
}

// 포인트 충전 내역 타입
export type RechargePointType = {
  paymentType?: string
} & UsagePointType

export type PointsListType = {
  usageData: UsagePointType[]
  rechargeData: RechargePointType[]
}

export type PointItemType = {
  type: string
  createdAt: string
  content: string
  amount: number
  total: number
}
