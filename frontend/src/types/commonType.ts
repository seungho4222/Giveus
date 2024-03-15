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

export type NumberStateType = {
  value: number
  setValue: Dispatch<SetStateAction<number>>
}

export type ModalType = {
  name: string
  children: React.ReactNode
  open: boolean
  onClickToggleModal: () => void
}
