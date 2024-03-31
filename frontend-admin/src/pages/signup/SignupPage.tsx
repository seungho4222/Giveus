import { joinUser } from '@/apis/auth'
// import { adminState } from '@/store/UserAtom'
import { adminState } from '@/store/user'
import * as s from '@pages/signup/SignupPage.styled'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import {
  createPrivateKey,
  getPublicKey,
  getEthereumAddress,
} from '@/utils/walletCreation'
import Modal from '@common/Modal'
import PrivKey from '@components/privKey'

const SignupPage = () => {
  const [name, setName] = useState<string>('')
  const setadminState = useSetRecoilState(adminState)

  const navigate = useNavigate()

  const [isModalOpen, setIsModalOpen] = useState(false) // 모달이 열려있는지 상태를 관리합니다.
  const [privateKey, setPrivateKey] = useState<string>('')
  const [address, setAddress] = useState<string>('')

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const signup = async () => {
    console.log(name)

    // 지갑 생성 후 계정주소 서버에 저장
    let privateKey: string = createPrivateKey()
    const publicKey: string = getPublicKey(privateKey)
    const address: string = getEthereumAddress(publicKey)
    setPrivateKey(privateKey)
    setAddress(address)

    openModal()

    try {
      const res = await joinUser({name, address})
      setadminState(res.data.data)

      if (!isModalOpen) {
        navigate('/funding')
      }

    } catch (err) {
      console.error('Error during signup:', err)
      closeModal()
    }
  }

  return (
    <s.Container>
      <div>회원가입 페이지</div>
      <div>병원 이름</div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <Modal
          name={'개인키 관련 주의사항'}
          children={<PrivKey privateKey={privateKey} address={address} onClose={closeModal} />}
          onClose={closeModal}
        />

      <s.Button onClick={signup}>회원가입</s.Button>
    </s.Container>
  )
}

export default SignupPage
