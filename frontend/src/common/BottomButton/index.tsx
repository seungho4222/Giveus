import * as B from '@/common/BottomButton/BottomButton.styled'

const Index = (props: { text: string }) => {
  const { text } = props

  return (
    <B.Container>
      <B.Button>{text}</B.Button>
    </B.Container>
  )
}

export default Index
