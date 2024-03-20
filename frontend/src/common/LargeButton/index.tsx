import { LargeButtonType } from '@/types/commonType'
import * as f from '@common/LargeButton/LargeButton.styled'

const Index = (props: LargeButtonType) => {
  const { text, onClick } = props

  return <f.Button onClick={onClick}>{text}</f.Button>
}

export default Index
