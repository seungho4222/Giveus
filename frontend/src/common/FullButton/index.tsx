import { FullButtonType } from '@/types/commonType'
import * as f from '@common/FullButton/FullButton.styled'

const Index = (props: FullButtonType) => {
  const { text, disabled, onClick } = props

  return (
    <f.Button disabled={disabled} onClick={onClick}>
      {text}
    </f.Button>
  )
}

export default Index
