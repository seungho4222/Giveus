import { Dispatch, SetStateAction } from 'react'
import { CustomToggleType } from '@/types/commonType'

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
  amount: number
  createdAt: string
  title: string
}

// 포인트 충전 내역 타입
export type RechargePointType = {
  pointNo: number
  amount: number
  createdAt: string
  content: string
  paymentType?: string
}

export type PointsListType = {
  usageList: UsagePointType[]
  rechargeList: RechargePointType[]
}

export type PointItemType = {
  type: string
  createdAt: string
  content: string
  amount: number
  total: number
}

export type DonatedFundingType = {
  fundingNo: number
  thumbnailUrl: string
  title: string
  birth: string
  status: string
  startDate: string
  endDate: string
  totalAmount: number
  targetAmount: number
  createdAt: string
  amount: number
}

export type DonatedFundingListType = {
  donatedFunding: DonatedFundingType[]
}

export type SettingItemType = {
  title: string
} & CustomToggleType

export type MypageMenuItemType = {
  title: string
  imgSrc: string
  imgSrc_dark: string
  width: number
  height: number
  text?: string
  url?: string
  onClick?: () => void
}
