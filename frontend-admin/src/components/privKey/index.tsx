import styled from 'styled-components'
import { colors } from '@/styles/theme'
import { useState } from 'react'

type PrivKeyProp = {
  privateKey: string
  address: string
  onClose: () => void
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  align-items: flex-start;
  gap: 30px;
`

const Content = styled.div`
  font-weight: 600;
  color: ${(props) => (props.color)};
`

const Button = styled.button`
  width: 200px;
  height: 70px;
  border-radius: 10px;
  font-size: 20px;
  color: white;
  font-weight: 600;
  background-color: ${colors.blue01};
`

const index = (props: PrivKeyProp) => {
  const { privateKey, address, onClose } = props
  const [showWarning, setShowWarning] = useState(false)


  const handleButtonClick = () => {
    
    setShowWarning(true)

    onClose()
  }

  return (
    <Container>
      <Content color='red'>개인키를 안전한 곳에 보관하세요!</Content>
      <Content>개인키는 유출되면 재산을 잃을 수 있습니다. 절대로 타인에게 공개하지 마세요.</Content>

      <Content> 개인키 : {privateKey}</Content>
      <Content> 이더리움 계정 주소 : {address}</Content>
      <Button onClick={handleButtonClick}>확인</Button>
    </Container>
  )
}

export default index
