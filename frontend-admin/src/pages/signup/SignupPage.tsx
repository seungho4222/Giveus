import { joinUser } from '@/apis/auth'
import { userState } from '@/recoil/atoms/UserAtom'
import * as s from '@pages/signup/SignupPage.styled'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'

const SignupPage = () => {
  const [name, setName] = useState<string>('')
  const setUserState = useSetRecoilState(userState)

  const navigate = useNavigate()

  const signup = () => {
    console.log(name)
    joinUser({ name }).then(res => {
      setUserState(res.data)
      // 지갑 생성
      // 성공 페이지 이동
      navigate('/')
    })
  }

  return (
    <s.Container>
      <div>회원가입 페이지</div>
      <div>병원 이름</div>
      <input value={name} onChange={e => setName(e.target.value)} />
      <s.Button onClick={signup}>회원가입</s.Button>
    </s.Container>
  )
}

export default SignupPage
