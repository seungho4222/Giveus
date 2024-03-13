import SignupNameSection from '@components/signup/SignupNameSection'
import SingupNicknameSection from '@components/signup/SignupNicknameSection'
import SignupHeader from '@components/signup/SignupHeader'
import * as s from '@pages/signup/SignupPage.styled'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignupPage = () => {
  const [stage, setStage] = useState(0)
  const [name, setName] = useState('')
  const [nickName, setNickName] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    // stage가 -1 이하이면 로그인 페이지로 이동
    stage < 0 && navigate('/login', { replace: true })
  }, [stage])

  const singup = () => {
    console.log(name, nickName)
  }

  return (
    <s.Container>
      <SignupHeader value={stage} setValue={setStage} />
      <s.Wrap>
        {stage === 0 && (
          <SignupNameSection
            value={name}
            setValue={setName}
            onClick={() => setStage(1)}
          />
        )}
        {stage === 1 && (
          <SingupNicknameSection
            value={nickName}
            setValue={setNickName}
            onClick={singup}
          />
        )}
      </s.Wrap>
    </s.Container>
  )
}

export default SignupPage
