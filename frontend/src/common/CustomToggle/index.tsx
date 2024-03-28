import { CustomToggleType } from '@/types/commonType'
import * as c from '@common/CustomToggle/CustomToggle.styled'

const Index = (props: CustomToggleType) => {
  const { selected, onClick } = props

  return (
    <c.Container $selected={selected} onClick={onClick}>
      <c.Wrap $selected={selected} />
    </c.Container>
  )
}

export default Index
