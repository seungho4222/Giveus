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
