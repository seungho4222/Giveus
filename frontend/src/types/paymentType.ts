export type PaymentType = {
  memberNo: number
  fundingNo: number
  amount: number
  point: number
  title: string
  opened: boolean
}

export type PointChargeType = {
  memberNo: number
  amount: number
}

export type PointPayType = {
  fundingNo: number
  opened: boolean
} & PointChargeType
