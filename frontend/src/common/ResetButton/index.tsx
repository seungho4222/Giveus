import { ResetButtonType } from '@/types/commonType'
import * as r from '@common/ResetButton/ResetButton.styled'

const Index = (props: ResetButtonType) => {
  const { text, onClick } = props

  return (
    <r.Container onClick={onClick}>
      <r.Icon src="/icon/icon_reset_gray.png" alt="" />
      {text}
    </r.Container>
  )
}

export default Index
