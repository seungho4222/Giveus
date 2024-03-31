import * as p from '@components/privKey/PrivKey.styled'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

type PrivKeyProp = {
  privateKey: string
  address: string
  onClose: () => void
}

const index = (props: PrivKeyProp) => {
  const { privateKey, address, onClose } = props
  const navigate = useNavigate()
  const keyRef = useRef(null)
  const addressRef = useRef(null)

  const handleCopy = (ref: React.RefObject<HTMLParagraphElement>) => {
    if (ref.current) {
      try {
        navigator.clipboard.writeText(ref.current.textContent || '')
        alert('클립보드에 복사되었습니다.')
      } catch (error) {
        alert('클립보드 복사에 실패하였습니다.')
      }
    }
  }

  const handleButtonClick = () => {
    navigate('/funding')
    onClose()
  }

  return (
    <p.Container>
      <p.Content color="red">개인키를 안전한 곳에 보관하세요!</p.Content>
      <p.Content>
        개인키는 유출되면 재산을 잃을 수 있습니다. 절대로 타인에게 공개하지
        마세요.
      </p.Content>
      <p.Data>
        * 개인키 :&nbsp;<p.Ref ref={keyRef}>{privateKey}</p.Ref>{' '}
        <p.Icon
          src="/icon/icon_copy_blue.png"
          onClick={() => handleCopy(keyRef)}
        />
      </p.Data>
      <p.Data>
        * 이더리움 계정 주소 :&nbsp;<p.Ref ref={addressRef}>{address}</p.Ref>{' '}
        <p.Icon
          src="/icon/icon_copy_blue.png"
          onClick={() => handleCopy(addressRef)}
        />
      </p.Data>
      <p.Button onClick={() => handleButtonClick()}>확인</p.Button>
    </p.Container>
  )
}

export default index
