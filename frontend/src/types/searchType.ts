import { StringStateType } from '@/types/commonType'

export type SearchFormType = {
  onSearch: (value: string, e: React.KeyboardEvent) => void
  resetKeyword: () => void
} & StringStateType
