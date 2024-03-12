import { Dispatch, SetStateAction } from 'react'

export type FullButtonType = {
  text: string
  disabled: boolean
  onClick: () => void
}

export type StringStateType = {
  value: string
  setValue: Dispatch<SetStateAction<string>>
}
