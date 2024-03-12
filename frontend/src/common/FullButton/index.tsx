import { FullButtonType } from '@/types/commonType'
import * as f from '@common/FullButton/FullButton.styled'
import { useNavigate } from 'react-router-dom'

const Index = (props: FullButtonType) => {
  const { text, disabled, url } = props

  const navigate = useNavigate()

  const onClick = () => navigate(url)

  return (
    <f.Button disabled={disabled} onClick={onClick}>
      {text}
    </f.Button>
  )
}

export default Index
